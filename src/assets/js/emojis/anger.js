import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M2.638 23.821l-1.625-3.1 1.55-.812c2.393-1.255 4.982-2.778 5.413-4.982.335-1.714-.611-3.903-2.812-6.506l-1.13-1.336 2.672-2.26 1.13 1.336c2.961 3.502 4.131 6.589 3.574 9.437-.788 4.037-4.975 6.231-7.223 7.41l-1.549.813zM20.93 34.947l-.812-1.55c-1.255-2.394-2.778-4.982-4.982-5.413-1.713-.336-3.903.611-6.506 2.812l-1.336 1.13-2.26-2.672 1.336-1.13c3.501-2.962 6.585-4.134 9.437-3.574 4.037.788 6.231 4.974 7.41 7.223l.812 1.55-3.099 1.624zm8.531-4.022l-1.13-1.336C25.369 26.087 24.2 23 24.757 20.151c.788-4.036 4.974-6.23 7.223-7.409l1.55-.812 1.625 3.1-1.55.812c-2.394 1.255-4.982 2.778-5.413 4.981-.335 1.715.611 3.903 2.811 6.506l1.13 1.336-2.672 2.26zm-7.708-19.588c-.471 0-.934-.045-1.392-.134-4.037-.788-6.231-4.975-7.41-7.223l-.812-1.55 3.1-1.625.813 1.55c1.255 2.393 2.778 4.982 4.981 5.413 1.711.334 3.902-.61 6.506-2.812l1.336-1.13 2.26 2.672-1.336 1.13c-2.941 2.486-5.588 3.709-8.046 3.709z", {["fill"]: "#BE1931",["d"]: "M2.638 23.821l-1.625-3.1 1.55-.812c2.393-1.255 4.982-2.778 5.413-4.982.335-1.714-.611-3.903-2.812-6.506l-1.13-1.336 2.672-2.26 1.13 1.336c2.961 3.502 4.131 6.589 3.574 9.437-.788 4.037-4.975 6.231-7.223 7.41l-1.549.813zM20.93 34.947l-.812-1.55c-1.255-2.394-2.778-4.982-4.982-5.413-1.713-.336-3.903.611-6.506 2.812l-1.336 1.13-2.26-2.672 1.336-1.13c3.501-2.962 6.585-4.134 9.437-3.574 4.037.788 6.231 4.974 7.41 7.223l.812 1.55-3.099 1.624zm8.531-4.022l-1.13-1.336C25.369 26.087 24.2 23 24.757 20.151c.788-4.036 4.974-6.23 7.223-7.409l1.55-.812 1.625 3.1-1.55.812c-2.394 1.255-4.982 2.778-5.413 4.981-.335 1.715.611 3.903 2.811 6.506l1.13 1.336-2.672 2.26zm-7.708-19.588c-.471 0-.934-.045-1.392-.134-4.037-.788-6.231-4.975-7.41-7.223l-.812-1.55 3.1-1.625.813 1.55c1.255 2.393 2.778 4.982 4.981 5.413 1.711.334 3.902-.61 6.506-2.812l1.336-1.13 2.26 2.672-1.336 1.13c-2.941 2.486-5.588 3.709-8.046 3.709z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};