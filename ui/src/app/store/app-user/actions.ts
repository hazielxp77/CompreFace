import { createAction, props } from '@ngrx/store';
import { AppUser } from 'src/app/data/appUser';

export const loadAppUserEntityAction = createAction('[App-User/API] Load App Users', props<{
  organizationId: string,
  applicationId: string
}>());
export const addAppUserEntityAction = createAction('[App-User/API] Add App Users', props<{ users: AppUser[] }>());
export const putUpdatedAppUserRoleEntityAction = createAction(
  '[App-User/API] Put Updated App User',
  props<{ organizationId: string; applicationId: string; user: { id: string, role: string } }>()
);
export const updateUserRoleEntityAction = createAction('[App-User/API] Update App User Role', props<{ user: AppUser }>());

export const deleteUserFromApplication = createAction('[App-User] Delete User From Application',
  props<{ userId: string; organizationId: string, applicationId: string }>());
export const deleteUserFromApplicationSuccess = createAction('[App-User] Delete User From Application Success', props<{ id: string }>());
export const deleteUserFromApplicationFail = createAction('[App-User] Delete User From Application Fail', props<{ error: any }>());