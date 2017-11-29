export default function createConstants (moduleName, names) {
	var constants = {}, name, i, len;

	for (i = 0, len = names.length; i < len; ++i) {
		name = names[i];
		if (constants[name]) {
			console.error('Duplicated redux constant name: ', name);
			console.error('Application will probably not work correctly.');
		}
		constants[name] = '@' + moduleName + '/' + name;
	}

	return constants;
}
