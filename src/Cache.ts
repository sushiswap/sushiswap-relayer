import redis, { RedisClient } from "redis";
import { promisify } from "util";
import Log from "./Log";

class Cache {
    client: RedisClient;

    constructor() {
        this.client = redis.createClient(process.env.REDIS_URL || "redis://127.0.0.1:6379");
        this.client.on("error", Log.w);
    }

    async getString(key: string) {
        const value = await this.get(key);
        return value === null ? null : value.toString();
    }

    async getNumber(key: string) {
        const value = await this.get(key);
        return value === null ? null : Number(value);
    }

    async getBoolean(key: string) {
        const value = await this.get(key);
        return value === null ? null : Boolean(value === "true");
    }

    async getJSON(key: string) {
        const value = await this.get(key);
        return value === null ? null : JSON.parse(value);
    }

    private async get(key: string): Promise<string | null> {
        try {
            const getAsync = promisify(this.client.get).bind(this.client);
            return await getAsync(key);
        } catch {
            return null;
        }
    }

    async set(key: string, value: unknown) {
        const setAsync = promisify(this.client.set).bind(this.client);
        if (typeof value === "object") {
            value = JSON.stringify(value);
        } else {
            value = value.toString();
        }
        await setAsync(key, value);
    }

    async mset(key: string, ...nameValues: any[]) {
        const msetAsync = promisify(this.client.mset).bind(this.client);
        const values = nameValues.map(nameOrValue => {
            if (!nameOrValue) {
                throw new Error("mset: even number of name or value must be provided");
            }
            if (typeof nameOrValue === "object") {
                nameOrValue = JSON.stringify(nameOrValue);
            } else {
                nameOrValue = nameOrValue.toString();
            }
            return nameOrValue;
        });
        Log.d(values);
        await msetAsync(key, values);
    }
}

export default Cache;
