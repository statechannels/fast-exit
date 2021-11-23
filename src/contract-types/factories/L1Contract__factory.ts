/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L1Contract, L1ContractInterface } from "../L1Contract";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "senderNonce",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "escrowHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawalTicket",
        name: "ticket",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "escrowPreimage",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "claimTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "senderNonce",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "escrowHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawalTicket[]",
        name: "tickets",
        type: "tuple[]",
      },
      {
        internalType: "bytes32[]",
        name: "escrowPreimages",
        type: "bytes32[]",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct Signature[]",
        name: "signatures",
        type: "tuple[]",
      },
    ],
    name: "claimTickets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct Signature",
        name: "signature",
        type: "tuple",
      },
    ],
    name: "recoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610980806100206000396000f3fe60806040526004361061003f5760003560e01c80631f02228814610044578063760bd287146100665780639c6a84cd14610086578063d0e30db0146100c2575b600080fd5b34801561005057600080fd5b5061006461005f3660046105cd565b6100ca565b005b34801561007257600080fd5b506100646100813660046106ad565b610473565b34801561009257600080fd5b506100a66100a13660046107ef565b6104ea565b6040516001600160a01b03909116815260200160405180910390f35b6100646105a7565b6000836040516020016100dd9190610834565b604051602081830303815290604052805190602001209050600061010c82848036038101906100a19190610894565b905060008460405160200161012391815260200190565b6040516020818303038152906040528051906020012090508560a0013542111561018c5760405162461bcd60e51b8152602060048201526015602482015274151a19481d1a58dad95d081a5cc8195e1c1a5c9959605a1b60448201526064015b60405180910390fd5b856080013581146101fd5760405162461bcd60e51b815260206004820152603560248201527f54686520707265696d616765206d757374206d617463682074686520657363726044820152741bddc81a185cda081bdb881d1a19481d1a58dad95d605a1b6064820152608401610183565b6000806102106080890160608a016108b7565b6001600160a01b03166001600160a01b03168152602001908152602001600020548660200135146102995760405162461bcd60e51b815260206004820152602d60248201527f5469636b6574206e6f6e6365206d75737420626520746865206e65787420617660448201526c61696c61626c65206e6f6e636560981b6064820152608401610183565b6102a960808701606088016108b7565b6001600160a01b0316826001600160a01b0316146103095760405162461bcd60e51b815260206004820152601e60248201527f5469636b6574206973206e6f74207369676e65642062792073656e64657200006044820152606401610183565b85356001600061031f60808a0160608b016108b7565b6001600160a01b03166001600160a01b031681526020019081526020016000205410156103985760405162461bcd60e51b815260206004820152602160248201527f53656e64657220646f6573206e6f74206861766520656e6f7567682066756e646044820152607360f81b6064820152608401610183565b6000806103ab6080890160608a016108b7565b6001600160a01b03168152602081019190915260400160009081208054916103d2836108ea565b909155506103e8905060608701604088016108b7565b6040516001600160a01b039190911690873580156108fc02916000818181858888f19350505050158015610420573d6000803e3d6000fd5b5085356001600061043760808a0160608b016108b7565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546104669190610905565b9091555050505050505050565b60005b858110156104e1576104cf8787838181106104935761049361091c565b905060c002018686848181106104ab576104ab61091c565b905060200201358585858181106104c4576104c461091c565b9050606002016100ca565b806104d9816108ea565b915050610476565b50505050505050565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018390526000908190605c0160408051601f198184030181528282528051602091820120868301518751888401516000875293860180865283905260ff9091169385019390935260608401929092526080830152915060019060a0016020604051602081039080840390855afa158015610594573d6000803e3d6000fd5b5050604051601f19015195945050505050565b33600090815260016020526040812080543492906105c6908490610932565b9091555050565b60008060008385036101408112156105e457600080fd5b60c08112156105f257600080fd5b84935060c08401359250606060df198201121561060e57600080fd5b5060e0840190509250925092565b60008083601f84011261062e57600080fd5b50813567ffffffffffffffff81111561064657600080fd5b6020830191508360208260051b850101111561066157600080fd5b9250929050565b60008083601f84011261067a57600080fd5b50813567ffffffffffffffff81111561069257600080fd5b60208301915083602060608302850101111561066157600080fd5b600080600080600080606087890312156106c657600080fd5b863567ffffffffffffffff808211156106de57600080fd5b818901915089601f8301126106f257600080fd5b81358181111561070157600080fd5b8a602060c08302850101111561071657600080fd5b60209283019850965090880135908082111561073157600080fd5b61073d8a838b0161061c565b9096509450604089013591508082111561075657600080fd5b5061076389828a01610668565b979a9699509497509295939492505050565b60006060828403121561078757600080fd5b6040516060810181811067ffffffffffffffff821117156107b857634e487b7160e01b600052604160045260246000fd5b80604052508091508235815260208301356020820152604083013560ff811681146107e257600080fd5b6040919091015292915050565b6000806080838503121561080257600080fd5b823591506108138460208501610775565b90509250929050565b6001600160a01b038116811461083157600080fd5b50565b813581526020808301359082015260c0810160408301356108548161081c565b6001600160a01b0390811660408401526060840135906108738261081c565b1660608301526080838101359083015260a092830135929091019190915290565b6000606082840312156108a657600080fd5b6108b08383610775565b9392505050565b6000602082840312156108c957600080fd5b81356108b08161081c565b634e487b7160e01b600052601160045260246000fd5b60006000198214156108fe576108fe6108d4565b5060010190565b600082821015610917576109176108d4565b500390565b634e487b7160e01b600052603260045260246000fd5b60008219821115610945576109456108d4565b50019056fea264697066735822122031ac27c47329b9c1af7a0c6bdef862c59e36f895b421053c404cf1ae6ef6d04064736f6c634300080a0033";

type L1ContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1ContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1Contract__factory extends ContractFactory {
  constructor(...args: L1ContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1Contract> {
    return super.deploy(overrides || {}) as Promise<L1Contract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): L1Contract {
    return super.attach(address) as L1Contract;
  }
  connect(signer: Signer): L1Contract__factory {
    return super.connect(signer) as L1Contract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1ContractInterface {
    return new utils.Interface(_abi) as L1ContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1Contract {
    return new Contract(address, _abi, signerOrProvider) as L1Contract;
  }
}
