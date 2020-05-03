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
				el.appendChild(svg["path"]("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18", {["fill"]: "#FFCC4D",["d"]: "M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18",}));el.appendChild(svg["path"]("M28.312 15.612c-.175-.142-.426-.147-.61-.014-.012.009-1.261.902-3.702.902-2.44 0-3.69-.893-3.7-.9-.183-.137-.435-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591zm-12.61-.014c-.012.009-1.26.902-3.702.902-2.441 0-3.69-.893-3.7-.9-.183-.137-.434-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591-.176-.143-.428-.147-.61-.014zM29.001 13c-.305 0-.604-.138-.801-.4-2.592-3.456-6.961-2.628-7.004-2.62-.547.108-1.068-.243-1.177-.784-.108-.541.243-1.068.784-1.177.231-.047 5.657-1.072 8.996 3.38.332.442.242 1.069-.2 1.4-.179.136-.389.201-.598.201zM6.999 13c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4 3.339-4.454 8.766-3.426 8.996-3.38.542.108.893.635.784 1.177-.108.54-.634.891-1.174.785-.186-.035-4.436-.808-7.006 2.618-.196.262-.497.4-.801.4zm16.255 10.577c-.188-.111-.432-.086-.597.06-.01.008-1.013.863-4.657.863-3.641 0-4.646-.854-4.646-.854-.159-.16-.404-.19-.6-.082-.195.111-.293.339-.238.557.01.044 1.144 4.379 5.484 4.379s5.474-4.335 5.485-4.379c.053-.213-.044-.431-.231-.544z", {["fill"]: "#664500",["d"]: "M28.312 15.612c-.175-.142-.426-.147-.61-.014-.012.009-1.261.902-3.702.902-2.44 0-3.69-.893-3.7-.9-.183-.137-.435-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591zm-12.61-.014c-.012.009-1.26.902-3.702.902-2.441 0-3.69-.893-3.7-.9-.183-.137-.434-.133-.611.009-.178.142-.238.386-.146.594.06.135 1.5 3.297 4.457 3.297 2.958 0 4.397-3.162 4.457-3.297.092-.207.032-.449-.145-.591-.176-.143-.428-.147-.61-.014zM29.001 13c-.305 0-.604-.138-.801-.4-2.592-3.456-6.961-2.628-7.004-2.62-.547.108-1.068-.243-1.177-.784-.108-.541.243-1.068.784-1.177.231-.047 5.657-1.072 8.996 3.38.332.442.242 1.069-.2 1.4-.179.136-.389.201-.598.201zM6.999 13c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4 3.339-4.454 8.766-3.426 8.996-3.38.542.108.893.635.784 1.177-.108.54-.634.891-1.174.785-.186-.035-4.436-.808-7.006 2.618-.196.262-.497.4-.801.4zm16.255 10.577c-.188-.111-.432-.086-.597.06-.01.008-1.013.863-4.657.863-3.641 0-4.646-.854-4.646-.854-.159-.16-.404-.19-.6-.082-.195.111-.293.339-.238.557.01.044 1.144 4.379 5.484 4.379s5.474-4.335 5.485-4.379c.053-.213-.044-.431-.231-.544z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};