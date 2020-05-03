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
				el.appendChild(svg["path"]("M28.303 2.576c-.449-.317-1.017-.173-1.263.319l-2.595 5.21c-.245.492-.695.521-1.001.064L18.556.86c-.306-.457-.806-.457-1.112 0l-4.888 7.308c-.306.457-.757.428-1.002-.064L8.96 2.895c-.245-.492-.813-.636-1.263-.319C7.697 2.576 0 8 0 20c0 7.732 8.059 16 18 16s18-8.268 18-16c0-12-7.697-17.424-7.697-17.424z", {["fill"]: "#DD2E44",["d"]: "M28.303 2.576c-.449-.317-1.017-.173-1.263.319l-2.595 5.21c-.245.492-.695.521-1.001.064L18.556.86c-.306-.457-.806-.457-1.112 0l-4.888 7.308c-.306.457-.757.428-1.002-.064L8.96 2.895c-.245-.492-.813-.636-1.263-.319C7.697 2.576 0 8 0 20c0 7.732 8.059 16 18 16s18-8.268 18-16c0-12-7.697-17.424-7.697-17.424z",}));el.appendChild(svg["path"]("M32 23c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-7c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v7z", {["fill"]: "#F5F8FA",["d"]: "M32 23c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2v-7c0-1.104.896-2 2-2h24c1.104 0 2 .896 2 2v7z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};