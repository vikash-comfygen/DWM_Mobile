import { notifications } from '@config/StaticDataSheet';

export const BASE_URL = 'https://www.staynpayhub.com/api/v1';
export const BASE_URL2 = 'https://line.gammingverse.com/apiv4';

export const API_KEY = '2c0ccdd2e1551979c10911de7bb80dff';

export const ApiURL = {
  getMatches: `${BASE_URL}/exchange/matches/`,
  getSeries: `${BASE_URL}/exchange/competitions/`,
  getTeams: `${BASE_URL}/exchange/teams/`,
  getPlayer: `${BASE_URL}/exchange/players/`,
  getIccRatings: `${BASE_URL}/exchange/iccranks/`,
  getNewsList: `${BASE_URL2}/news/c53a7587f90f1c734860c1485d31a78d`,
  // Auth
  userCheck: `${BASE_URL}/user/auth/user-check`,
  verifyUserOtp: `${BASE_URL}/user/auth/verify-user-otp`,
  // profile
  updateBasicDetails: `${BASE_URL}/user/profiles/update-basic-details`,
  updateProfile: `${BASE_URL}/user/profiles/update-profile`,
  getProfile: `${BASE_URL}/user/profiles/get-profile`,
  uploadGlobalModule: `${BASE_URL}/global-module/upload`,
  // property
  createProperty: `${BASE_URL}/user/property/create`,
  softDeleteProperty: `${BASE_URL}/user/property/soft-delete`,
  getPropertyList: `${BASE_URL}/user/property/list`,
  getTenantProfile: `${BASE_URL}/user/tenant/get-tenant-profile`,
  getTenantList: `${BASE_URL}/user/tenant/get-list`,
  getTenantDetailsById: `${BASE_URL}/user/tenant/get-detail-by-id`,
  updateProperty: `${BASE_URL}/user/property/update`,
  addPropertyDetail: `${BASE_URL}/user/property/add-property-detail`,
  getPropertyDetail: `${BASE_URL}/user/property/get-property-detail`,
  updatePropertyDetail: `${BASE_URL}/user/property/update-property-detail`,
  // payment
  addAccountDetail: `${BASE_URL}/user/account/add-account-detail`,
  addTenant: `${BASE_URL}/user/tenant/add-tenant`,
  getTenants: `${BASE_URL}/user/tenant/get-list`,
  // notifications
  OwnerNotification: `${BASE_URL}/global-module/notifications`,
  // Tenants Api

  tenantLogin: `${BASE_URL}/user/auth/user-check-tenant`,
  // tenantOtpVerify:`${BASE_URL}/user/auth/verify-user-otp`,
  tenantOtpVerify: `${BASE_URL}/user/auth/verify-user-otp-tenant`,
  tentantProfile: `${BASE_URL}/user/tenant/get-tenant-profile`,
  raiseTicket: `${BASE_URL}/global-module/support-ticket/raised-ticket`,
  ticketList: `${BASE_URL}/global-module/support-ticket/ticket-list`,
  ticketChats: `${BASE_URL}/global-module/support-ticket/ticket-chats`,
  createTenantWorking: `${BASE_URL}/global-module/tenantWorking/create-tenantWorking`,
  hodWorking: `${BASE_URL}/global-module/tenantWorking/create-tenantWorking`,
  getTenantWorking: `${BASE_URL}/global-module/tenantWorking/getTenantWorking`,
  updateTenantWorking: `${BASE_URL}/global-module/tenantWorking/update-tenantWorking`,
  getPaymentHistory: `${BASE_URL}/global-module/rent/payment-list`,
  updateTenant: `${BASE_URL}/user/tenant/update-tenant`,
  totalTenantData: `${BASE_URL}/user/tenant/get-dashboard-tenant`,
  getAllCities:`${BASE_URL}/global-module/cities`,
  getAllState:`${BASE_URL}/global-module/states`
};
