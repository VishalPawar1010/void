/*--------------------------------------------------------------------------------------
 *  Copyright 2025 Glass Devtools, Inc. All rights reserved.
 *  Licensed under the Apache License, Version 2.0. See LICENSE.txt for more information.
 *--------------------------------------------------------------------------------------*/

import { createDecorator, ServicesAccessor } from '../../../../platform/instantiation/common/instantiation.js';
import { registerSingleton, InstantiationType } from '../../../../platform/instantiation/common/extensions.js';
import { ProxyChannel } from '../../../../base/parts/ipc/common/ipc.js';		
import { localize2 } from '../../../../nls.js';
import { registerAction2, Action2 } from '../../../../platform/actions/common/actions.js';
import { INotificationService } from '../../../../platform/notification/common/notification.js';

export interface IMetricsService {
	readonly _serviceBrand: undefined;
	capture(event: string, params: Record<string, any>): void;
	getDebuggingProperties(): Promise<object>;
}

export const IMetricsService = createDecorator<IMetricsService>('metricsService');


// Implementation moved to platform-specific layer (browser/main). Only interface and decorator remain here.

// debugging action
registerAction2(class extends Action2 {
	constructor() {
		super({
			id: 'voidDebugInfo',
			f1: true,
			title: localize2('voidMetricsDebug', 'Void: Log Debug Info'),
		});
	}
	async run(accessor: ServicesAccessor): Promise<void> {
		const metricsService = accessor.get(IMetricsService)
		const notifService = accessor.get(INotificationService)

		const debugProperties = await metricsService.getDebuggingProperties()
		console.log('Metrics:', debugProperties)
		notifService.info(`Void Debug info:\n${JSON.stringify(debugProperties, null, 2)}`)
	}
})
