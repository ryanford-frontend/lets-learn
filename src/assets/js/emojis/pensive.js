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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18",}));el.appendChild(svg["path"]("M17.312 17.612c-.176-.143-.427-.147-.61-.014-.012.009-1.26.902-3.702.902-2.441 0-3.69-.893-3.7-.9-.183-.137-.435-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591zm10 0c-.176-.143-.426-.148-.61-.014-.012.009-1.261.902-3.702.902-2.44 0-3.69-.893-3.7-.9-.183-.137-.434-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591zM22 28h-8c-.552 0-1-.447-1-1s.448-1 1-1h8c.553 0 1 .447 1 1s-.447 1-1 1zM6 14c-.552 0-1-.448-1-1 0-.551.445-.998.996-1 .156-.002 3.569-.086 6.205-3.6.331-.44.957-.532 1.4-.2.442.331.531.958.2 1.4C10.538 13.95 6.184 14 6 14zm24 0c-.184 0-4.537-.05-7.8-4.4-.332-.442-.242-1.069.2-1.4.441-.333 1.067-.242 1.399.2 2.641 3.521 6.061 3.599 6.206 3.6.55.006.994.456.991 1.005-.002.551-.446.995-.996.995z", {["fill"]: "#664500",["d"]: "M17.312 17.612c-.176-.143-.427-.147-.61-.014-.012.009-1.26.902-3.702.902-2.441 0-3.69-.893-3.7-.9-.183-.137-.435-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591zm10 0c-.176-.143-.426-.148-.61-.014-.012.009-1.261.902-3.702.902-2.44 0-3.69-.893-3.7-.9-.183-.137-.434-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591zM22 28h-8c-.552 0-1-.447-1-1s.448-1 1-1h8c.553 0 1 .447 1 1s-.447 1-1 1zM6 14c-.552 0-1-.448-1-1 0-.551.445-.998.996-1 .156-.002 3.569-.086 6.205-3.6.331-.44.957-.532 1.4-.2.442.331.531.958.2 1.4C10.538 13.95 6.184 14 6 14zm24 0c-.184 0-4.537-.05-7.8-4.4-.332-.442-.242-1.069.2-1.4.441-.333 1.067-.242 1.399.2 2.641 3.521 6.061 3.599 6.206 3.6.55.006.994.456.991 1.005-.002.551-.446.995-.996.995z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};