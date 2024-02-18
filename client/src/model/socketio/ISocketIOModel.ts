import * as socketIo from 'socket.io-client';
export default interface ISocketIOModel {
    Iinitialize(): void;
    getIO(): socketIo.Socket | null;
    onUpdateState(callback: () => void): void;
    offUpdateState(callback: () => void): void;
    onUpdateEncodeState(callback: () => void): void;
    offUpdateEncodeState(callback: () => void): void;
}
