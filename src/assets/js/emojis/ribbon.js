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
				el.appendChild(svg["path"]("M19.281 6.392c0 .405-2.37.405-2.37 0 0-.9-14.911-9.899-14.911-2.7v13.499c0 2.487 3.476 1.947 7.193.361-1.429 3.525-4.498 9.68-7.05 13.934-.229.382-.178.868.124 1.194.303.325.783.415 1.181.215l5.258-2.629c.441.726.931 1.868 1.376 2.906.333.778.678 1.582 1.024 2.275.144.287.417.488.734.54.053.009.107.013.16.013.263 0 .518-.104.707-.293 1.42-1.419 3.429-8.395 4.793-14.093 1.364 5.698 3.373 12.674 4.793 14.093.188.189.444.293.707.293.053 0 .106-.004.16-.013.317-.052.591-.253.734-.54.347-.693.691-1.497 1.024-2.275.445-1.038.935-2.181 1.376-2.906l5.258 2.629c.398.198.879.111 1.181-.215.303-.326.352-.812.124-1.194-2.735-4.558-6.061-11.296-7.328-14.643C29.652 18.933 34 20.02 34 17.19V3.691c0-7.198-14.719 1.801-14.719 2.701z", {["fill"]: "#DD2E44",["d"]: "M19.281 6.392c0 .405-2.37.405-2.37 0 0-.9-14.911-9.899-14.911-2.7v13.499c0 2.487 3.476 1.947 7.193.361-1.429 3.525-4.498 9.68-7.05 13.934-.229.382-.178.868.124 1.194.303.325.783.415 1.181.215l5.258-2.629c.441.726.931 1.868 1.376 2.906.333.778.678 1.582 1.024 2.275.144.287.417.488.734.54.053.009.107.013.16.013.263 0 .518-.104.707-.293 1.42-1.419 3.429-8.395 4.793-14.093 1.364 5.698 3.373 12.674 4.793 14.093.188.189.444.293.707.293.053 0 .106-.004.16-.013.317-.052.591-.253.734-.54.347-.693.691-1.497 1.024-2.275.445-1.038.935-2.181 1.376-2.906l5.258 2.629c.398.198.879.111 1.181-.215.303-.326.352-.812.124-1.194-2.735-4.558-6.061-11.296-7.328-14.643C29.652 18.933 34 20.02 34 17.19V3.691c0-7.198-14.719 1.801-14.719 2.701z",}));el.appendChild(svg["path"]("M2.114 17.869c1.177 3.199 11.468-1.787 14.86-5.179.31-.31.549-.602.758-.885-10.446.252-14.542 3.857-15.618 6.064zm16.482-6.068c.212.285.453.578.765.89 3.6 3.6 14.639 8.999 14.639 4.5v-.209c-1.671-2.199-6.037-5.022-15.404-5.181z", {["fill"]: "#A0041E",["d"]: "M2.114 17.869c1.177 3.199 11.468-1.787 14.86-5.179.31-.31.549-.602.758-.885-10.446.252-14.542 3.857-15.618 6.064zm16.482-6.068c.212.285.453.578.765.89 3.6 3.6 14.639 8.999 14.639 4.5v-.209c-1.671-2.199-6.037-5.022-15.404-5.181z",}));el.appendChild(svg["path"]("M22 11.4c0 1.988-1.611 3.6-3.599 3.6h-1.802C14.611 15 13 13.388 13 11.4V7.6C13 5.612 14.611 4 16.599 4h1.802C20.389 4 22 5.612 22 7.6v3.8z", {["fill"]: "#EA596E",["d"]: "M22 11.4c0 1.988-1.611 3.6-3.599 3.6h-1.802C14.611 15 13 13.388 13 11.4V7.6C13 5.612 14.611 4 16.599 4h1.802C20.389 4 22 5.612 22 7.6v3.8z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};