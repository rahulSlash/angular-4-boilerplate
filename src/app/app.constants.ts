import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export let APP_CONSTANTS = new InjectionToken<AppConstantConfig>('app.constant');
export let SERVICE_CONSTANTS = new InjectionToken<AppConstantConfig>('app.service.constant');

export class AppConstantConfig {
   	rootUrl			: string;
	components		: string;
	translationPath 	: string;
	pluginPath 	 	: string;
	imagesPath 	 	: string;
}

export const APP_CONSTANTS_CONFIG: AppConstantConfig = {
	rootUrl         		: '/',
	components		: '',
	translationPath 	: '/assets/i18n/',
	pluginPath 	 	: '',
	imagesPath 	 	: '../assets/images/',
};

// Services Constants
export class ServiceConstantConfig {
    apiUrl : string;
		
}

export const SERVICE_CONSTANTS_CONFIG: ServiceConstantConfig = {
  	//apiUrl : 'https://mocksvc.mulesoft.com/mocks/30c591e3-5eed-4bea-a57a-dbd5765daef1/mocks/a41bce62-fa8e-4799-a3b4-cdd064d1f360/teacher/'
	  apiUrl : '/api/'
		
};

@NgModule({
  providers: [{
    provide: APP_CONSTANTS,
    useValue: APP_CONSTANTS_CONFIG
  },{
    provide: SERVICE_CONSTANTS,
    useValue: SERVICE_CONSTANTS_CONFIG  
  }]
})
export class AppConstantsModule { }

