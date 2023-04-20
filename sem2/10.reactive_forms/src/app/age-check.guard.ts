import {inject} from "@angular/core";
import {UserInfoService} from "./user-info.service";
import {Router} from "@angular/router";

export const AgeCheckGuard = () => {
  const userInfoService = inject(UserInfoService);
  const router = inject(Router);

  if (userInfoService.isUserOfAge()) {
    return true;
  }

  return router.parseUrl('/age-verification');
}
