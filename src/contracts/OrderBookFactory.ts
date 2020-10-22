/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { OrderBook } from "./OrderBook";

export class OrderBookFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OrderBook> {
    return super.deploy(overrides || {}) as Promise<OrderBook>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OrderBook {
    return super.attach(address) as OrderBook;
  }
  connect(signer: Signer): OrderBookFactory {
    return super.connect(signer) as OrderBookFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderBook {
    return new Contract(address, _abi, signerOrProvider) as OrderBook;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "OrderCancelled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "OrderCreated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "page",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256"
      }
    ],
    name: "allHashes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "cancelOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32"
      }
    ],
    name: "cancelOrderCallHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address"
      },
      {
        internalType: "address",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "createOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address"
      },
      {
        internalType: "address",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "createOrderCallHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256"
      }
    ],
    name: "hashesOfFromToken",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256"
      }
    ],
    name: "hashesOfMaker",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "page",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256"
      }
    ],
    name: "hashesOfToToken",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numberOfAllHashes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fromToken",
        type: "address"
      }
    ],
    name: "numberOfHashesOfFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address"
      }
    ],
    name: "numberOfHashesOfMaker",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "toToken",
        type: "address"
      }
    ],
    name: "numberOfHashesOfToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "orderOfHash",
    outputs: [
      {
        internalType: "address",
        name: "maker",
        type: "address"
      },
      {
        internalType: "address",
        name: "fromToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "toToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611066806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806365f7a5511161008c578063ac3204aa11610066578063ac3204aa146102b5578063bceb45db146102e9578063df4c1b4114610382578063ed421aa6146103a5576100cf565b806365f7a5511461025e57806375af1c361461029057806389da5e6914610298576100cf565b806303e0992f146100d45780630777aa321461010c57806314eaa86814610132578063257ce891146101b45780633d91efcf146102065780635fd45d241461022c575b600080fd5b6100fa600480360360208110156100ea57600080fd5b50356001600160a01b031661040f565b60408051918252519081900360200190f35b6100fa6004803603602081101561012257600080fd5b50356001600160a01b031661042a565b6101646004803603606081101561014857600080fd5b506001600160a01b038135169060208101359060400135610445565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101a0578181015183820152602001610188565b505050509050019250505060405180910390f35b6100fa600480360360e08110156101ca57600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160808201359160a08101359091169060c00135610473565b6100fa6004803603602081101561021c57600080fd5b50356001600160a01b0316610490565b6101646004803603606081101561024257600080fd5b506001600160a01b0381351690602081013590604001356104ab565b6101646004803603606081101561027457600080fd5b506001600160a01b0381351690602081013590604001356104d1565b6100fa6104f7565b6100fa600480360360208110156102ae57600080fd5b50356104fd565b6102e7600480360360808110156102cb57600080fd5b5080359060ff6020820135169060408101359060600135610543565b005b610306600480360360208110156102ff57600080fd5b50356106b9565b604051808b6001600160a01b031681526020018a6001600160a01b03168152602001896001600160a01b03168152602001888152602001878152602001866001600160a01b031681526020018581526020018460ff1681526020018381526020018281526020019a505050505050505050505060405180910390f35b6101646004803603604081101561039857600080fd5b508035906020013561071f565b6102e760048036036101408110156103bc57600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160808201359160a08101359091169060c08101359060ff60e08201351690610100810135906101200135610734565b6001600160a01b031660009081526002602052604090205490565b6001600160a01b031660009081526001602052604090205490565b6001600160a01b038316600090815260026020526040902060609061046b908484610bbe565b949350505050565b600061048488888888888888610c80565b98975050505050505050565b6001600160a01b031660009081526003602052604090205490565b6001600160a01b038316600090815260016020526040902060609061046b908484610bbe565b6001600160a01b038316600090815260036020526040902060609061046b908484610bbe565b60005490565b60408051466020808301919091523060601b82840152635619025560e11b6054830152605880830194909452825180830390940184526078909101909152815191012090565b600084815260046020526040902080546001600160a01b031661059f576040805162461bcd60e51b815260206004820152600f60248201526e6e6f2d6f726465722d65786973747360881b604482015290519081900360640190fd5b60006105aa866104fd565b82549091506105c5906001600160a01b031682878787610d16565b61060c576040805162461bcd60e51b81526020600482015260136024820152723737ba16b9b4b3b732b216b13c96b6b0b5b2b960691b604482015290519081900360640190fd5b610617600087610e79565b81546001600160a01b0316600090815260016020526040902061063a9087610e79565b60018201546001600160a01b031660009081526002602052604090206106609087610e79565b60028201546001600160a01b031660009081526003602052604090206106869087610e79565b60405186907f5152abf959f6564662358c2e52b702259b78bac5ee7842a0f01937e670efcc7d90600090a2505050505050565b600460208190526000918252604090912080546001820154600283015460038401549484015460058501546006860154600787015460088801546009909801546001600160a01b0397881699968816989588169794959390941693919260ff909116918a565b606061072d60008484610bbe565b9392505050565b6001600160a01b038a16610787576040805162461bcd60e51b8152602060048201526015602482015274696e76616c69642d6d616b65722d6164647265737360581b604482015290519081900360640190fd5b6001600160a01b0389166107e2576040805162461bcd60e51b815260206004820152601a60248201527f696e76616c69642d66726f6d2d746f6b656e2d61646472657373000000000000604482015290519081900360640190fd5b6001600160a01b03881661083d576040805162461bcd60e51b815260206004820152601860248201527f696e76616c69642d746f2d746f6b656e2d616464726573730000000000000000604482015290519081900360640190fd5b876001600160a01b0316896001600160a01b031614156108a4576040805162461bcd60e51b815260206004820152601960248201527f6475706c69636174652d746f6b656e2d61646472657373657300000000000000604482015290519081900360640190fd5b600087116108ed576040805162461bcd60e51b815260206004820152601160248201527034b73b30b634b216b0b6b7bab73a16b4b760791b604482015290519081900360640190fd5b6000861161093b576040805162461bcd60e51b815260206004820152601660248201527534b73b30b634b216b0b6b7bab73a16b7baba16b6b4b760511b604482015290519081900360640190fd5b6001600160a01b03851661098a576040805162461bcd60e51b81526020600482015260116024820152701a5b9d985b1a590b5c9958da5c1a595b9d607a1b604482015290519081900360640190fd5b4284116109d1576040805162461bcd60e51b815260206004820152601060248201526f696e76616c69642d646561646c696e6560801b604482015290519081900360640190fd5b60006109e28b8b8b8b8b8b8b610473565b90506109f18b82868686610d16565b610a38576040805162461bcd60e51b81526020600482015260136024820152723737ba16b9b4b3b732b216b13c96b6b0b5b2b960691b604482015290519081900360640190fd5b600081815260046020526040902080546001600160a01b031615610a92576040805162461bcd60e51b815260206004820152600c60248201526b6f726465722d65786973747360a01b604482015290519081900360640190fd5b80546001600160a01b03199081166001600160a01b038e811691909117835560018301805483168e831617905560028301805483168d8316179055600383018b9055600483018a90556005830180549092169089161790556006810186905560078101805460ff191660ff87161790556008810184905560098101839055610b1c60008388610f25565b6001600160a01b038c166000908152600160205260409020610b3f908388610f25565b6001600160a01b038b166000908152600260205260409020610b62908388610f25565b6001600160a01b038a166000908152600360205260409020610b85908388610f25565b60405182907f918554b6bd6e2895ce6553de5de0e1a69db5289aa0e4fe193a0dcd1f1434747790600090a2505050505050505050505050565b60608167ffffffffffffffff81118015610bd757600080fd5b50604051908082528060200260200182016040528015610c01578160200160208202803683370190505b50905060005b82811015610c78578454848402820110610c3c576000801b828281518110610c2b57fe5b602002602001018181525050610c70565b84818486020181548110610c4c57fe5b9060005260206000200154828281518110610c6357fe5b6020026020010181815250505b600101610c07565b509392505050565b604080517f02f6dc7ce3eb5b1bd3bb37a6ff443d8c9922f817e83adacce3f8c7cdda6fa1e46020808301919091526bffffffffffffffffffffffff1960609a8b1b811683850152988a1b8916605483015296891b88166068820152607c810195909552609c850193909352951b90931660bc82015260d0808201949094528251808203909401845260f001909152815191012090565b60008060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610d73573d6000803e3d6000fd5b505050602060405103516001600160a01b0316876001600160a01b03161490508015610da3576001915050610e70565b8560405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c0182815260200191505060405160208183030381529060405280519060200120955060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610e4e573d6000803e3d6000fd5b505050602060405103516001600160a01b0316876001600160a01b0316149150505b95945050505050565b81546000190160005b8354811015610eb55782848281548110610e9857fe5b90600052602060002001541415610ead578091505b600101610e82565b50805b835460001901811015610eff57838160010181548110610ed457fe5b9060005260206000200154848281548110610eeb57fe5b600091825260209091200155600101610eb8565b5082805480610f0a57fe5b60019003818190600052602060002001600090559055505050565b8254610f455782546001810184556000848152602090200182905561102b565b60001960005b8454811015610f98578260046000878481548110610f6557fe5b90600052602060002001548152602001908152602001600020600601541115610f9057809150610f98565b600101610f4b565b50600019811415610fbe575082546001810184556000848152602090200182905561102b565b835460018101855560008590525b8181111561100f57846001820381548110610fe357fe5b9060005260206000200154858281548110610ffa57fe5b60009182526020909120015560001901610fcc565b508284828154811061101d57fe5b600091825260209091200155505b50505056fea2646970667358221220cfdb3ea215aae4c8acdbd757cb76d5f97558b7ea58b98b309b9eb260398aa9c964736f6c634300060c0033";