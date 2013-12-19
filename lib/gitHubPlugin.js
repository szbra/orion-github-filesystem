/*******************************************************************************
 * @license
 * Copyright (c) 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/

/*global window document define setTimeout*/

define(["orion/xhr", "orion/Deferred", "orion/plugin", "orion/gitHub", "domReady!"],

function(xhr, Deferred, PluginProvider, GitHub) {

	var temp = document.createElement('a');
	var login = temp.href;
	
	var headers = {
		name: "GitHub",
		version: "1.0",
		description: "This plugin integrates Orion with GitHub.",
	};

	var implementation = new GitHub.FileSystem();
                        
    // GitHub File System
    provider.registerService("orion.core.file", implementation, {
        Name: 'GitHub File System',
        top: "github.com/",
        base: "github.com/"
    });

	var provider = new PluginProvider(headers);

	provider.connect();
});