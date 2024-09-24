import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  SkipAuth,
  UsePrivileges,
} from './auth/decorators/setMetadata.decorator';
import { RolesGuard } from './auth/guards/RolesGuard';
import { UserRole } from './users/entities/user.entity';

@Controller()
@SkipAuth()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @UseGuards(RolesGuard)
  @UsePrivileges(UserRole.ADMIN, UserRole.COACH)
  @Get('protected-route')
  getProtectedRoute(): string {
    return 'This is a protected route!';
  }
}
