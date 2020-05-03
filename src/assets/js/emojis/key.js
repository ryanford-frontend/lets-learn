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
				el.appendChild(svg["path"]("M32.614 3.414C28.31-.89 21.332-.89 17.027 3.414c-3.391 3.392-4.098 8.439-2.144 12.535l-3.916 3.915c-.64.641-.841 1.543-.625 2.359l-1.973 1.972c-.479-.48-1.252-.48-1.731 0l-1.731 1.732c-.479.479-.479 1.253 0 1.732l-.867.864c-.479-.478-1.253-.478-1.731 0l-.866.867c-.479.479-.479 1.253 0 1.732.015.016.036.02.051.033-.794 1.189-.668 2.812.382 3.863 1.195 1.195 3.134 1.195 4.329 0L20.08 21.144c4.097 1.955 9.144 1.247 12.535-2.146 4.302-4.302 4.302-11.28-.001-15.584zm-1.731 5.195c-.957.956-2.509.956-3.464 0-.956-.956-.956-2.507 0-3.464.955-.956 2.507-.956 3.464 0 .956.957.956 2.508 0 3.464z", {["fill"]: "#C1694F",["d"]: "M32.614 3.414C28.31-.89 21.332-.89 17.027 3.414c-3.391 3.392-4.098 8.439-2.144 12.535l-3.916 3.915c-.64.641-.841 1.543-.625 2.359l-1.973 1.972c-.479-.48-1.252-.48-1.731 0l-1.731 1.732c-.479.479-.479 1.253 0 1.732l-.867.864c-.479-.478-1.253-.478-1.731 0l-.866.867c-.479.479-.479 1.253 0 1.732.015.016.036.02.051.033-.794 1.189-.668 2.812.382 3.863 1.195 1.195 3.134 1.195 4.329 0L20.08 21.144c4.097 1.955 9.144 1.247 12.535-2.146 4.302-4.302 4.302-11.28-.001-15.584zm-1.731 5.195c-.957.956-2.509.956-3.464 0-.956-.956-.956-2.507 0-3.464.955-.956 2.507-.956 3.464 0 .956.957.956 2.508 0 3.464z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};