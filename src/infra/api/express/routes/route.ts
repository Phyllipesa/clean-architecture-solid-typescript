import { Request, Response } from "express";

export type HttpMethot = "get" | "post";

export const HttpMethot = {
    GET: "get" as HttpMethot,
    POST: "post" as HttpMethot
} as const;

export interface Route {
    getHandler(): (request: Request, response: Response) => Promise<void>;
    getPath(): string;
    getMethod(): HttpMethot;
}
