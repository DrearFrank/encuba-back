import {JwtStrategy} from "./jwt/jwt.strategy";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";
import {Module} from "@nestjs/common";
import {UsersService} from "../users/users.service";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'jwt_secreto',
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService,UsersService, JwtStrategy],
})
export class AuthModule {}
