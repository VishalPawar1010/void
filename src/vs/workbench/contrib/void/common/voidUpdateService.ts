/*--------------------------------------------------------------------------------------
 *  Copyright 2025 Glass Devtools, Inc. All rights reserved.
 *  Licensed under the Apache License, Version 2.0. See LICENSE.txt for more information.
 *--------------------------------------------------------------------------------------*/

import { ProxyChannel } from '../../../../base/parts/ipc/common/ipc.js';
import { registerSingleton, InstantiationType } from '../../../../platform/instantiation/common/extensions.js';
import { createDecorator } from '../../../../platform/instantiation/common/instantiation.js';
// import { IMainProcessService } from '../../../../platform/ipc/common/mainProcessService.js'; // REMOVED: forbidden in common layer
import { VoidCheckUpdateRespose } from './voidUpdateServiceTypes.js';



export interface IVoidUpdateService {
	readonly _serviceBrand: undefined;
	check: (explicit: boolean) => Promise<VoidCheckUpdateRespose>;
}


export const IVoidUpdateService = createDecorator<IVoidUpdateService>('VoidUpdateService');


// Implementation moved to platform-specific layer (browser/main). Only interface and decorator remain here.


