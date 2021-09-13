export declare type MULTIADDRESS = string;
export declare type ID = string;
export declare type ERROR = string;
export declare type ANSWER = any;
export declare type PAYLOAD = any;
export declare enum EVENT {
    PEER = "ws-peer",
    HANDSHAKE = "ws-handshake"
}
export declare type SIGNAL = {
    type: string;
    sdp: string;
};
export declare type OFFER = {
    intentId: ID;
    srcMultiaddr: MULTIADDRESS;
    dstMultiaddr: MULTIADDRESS;
    signal: SIGNAL;
    err: ERROR;
    answer: ANSWER;
};
