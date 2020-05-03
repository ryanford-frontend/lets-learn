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
				el.appendChild(svg["path"]("M31.096 8.933c3.535-2.122 4.408-8.32 3.701-7.613.707-.707-5.657 0-7.778 3.536 0-1.414-1.414-7.071-3.535-2.121-2.122 4.95-1.415 5.657-1.415 7.071 0 1.414 2.829 1.414 2.829 1.414s-.125 2.704 1.29 2.704c1.414 0 1.997.583 6.946-1.538 4.95-2.122-.624-3.453-2.038-3.453z", {["fill"]: "#77B255",["d"]: "M31.096 8.933c3.535-2.122 4.408-8.32 3.701-7.613.707-.707-5.657 0-7.778 3.536 0-1.414-1.414-7.071-3.535-2.121-2.122 4.95-1.415 5.657-1.415 7.071 0 1.414 2.829 1.414 2.829 1.414s-.125 2.704 1.29 2.704c1.414 0 1.997.583 6.946-1.538 4.95-2.122-.624-3.453-2.038-3.453z",}));el.appendChild(svg["path"]("M22.422 23.594C14.807 31.209 2.27 36.675.502 34.907c-1.768-1.768 3.699-14.305 11.313-21.92 7.615-7.615 11.53-7.562 14.85-4.243 3.319 3.32 3.372 7.235-4.243 14.85z", {["fill"]: "#F4900C",["d"]: "M22.422 23.594C14.807 31.209 2.27 36.675.502 34.907c-1.768-1.768 3.699-14.305 11.313-21.92 7.615-7.615 11.53-7.562 14.85-4.243 3.319 3.32 3.372 7.235-4.243 14.85z",}));el.appendChild(svg["path"]("M21.875 14.56c-.972-.972-2.77-2.785-4.692-6.106-.753.492-1.554 1.091-2.409 1.808 2.803 3.613 8.121 5.317 7.101 4.298zm-7.485 8.072c-1.041-1.041-3.03-3.05-5.105-6.846-.687.832-1.349 1.693-1.98 2.57 2.807 3.597 8.101 5.292 7.085 4.276zm9.301-.351c-3.581-2.008-5.49-3.91-6.502-4.921-1.02-1.022.692 4.315 4.317 7.114.311-.29 1.786-1.767 2.185-2.193zm-12.183 9.324c.895-.492 1.804-1.025 2.715-1.597-3.273-1.905-5.069-3.683-6.034-4.648-.922-.923.386 3.347 3.319 6.245z", {["d"]: "M21.875 14.56c-.972-.972-2.77-2.785-4.692-6.106-.753.492-1.554 1.091-2.409 1.808 2.803 3.613 8.121 5.317 7.101 4.298zm-7.485 8.072c-1.041-1.041-3.03-3.05-5.105-6.846-.687.832-1.349 1.693-1.98 2.57 2.807 3.597 8.101 5.292 7.085 4.276zm9.301-.351c-3.581-2.008-5.49-3.91-6.502-4.921-1.02-1.022.692 4.315 4.317 7.114.311-.29 1.786-1.767 2.185-2.193zm-12.183 9.324c.895-.492 1.804-1.025 2.715-1.597-3.273-1.905-5.069-3.683-6.034-4.648-.922-.923.386 3.347 3.319 6.245z",["fill"]: "#D67503",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};