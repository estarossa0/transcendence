import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import { Observable } from "rxjs";

@Injectable()
export class SecretAuthGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const secret = context
      .switchToHttp()
      .getRequest<Request>()
      .header("Authorization");

    if (!secret || secret != this.config.get("SECRET"))
      throw new UnauthorizedException();
    return true;
  }
}
