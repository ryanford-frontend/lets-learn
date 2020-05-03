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
				el.appendChild(svg["path"]("M16.812 33c-.588 0-1.112-.37-1.31-.924L8.549 12.608c-.152-.426-.087-.872.173-1.242.261-.369.685-.563 1.137-.563h16.313c.557 0 1.059.305 1.279.817l8.343 19.455c.184.43.14.917-.116 1.307-.259.39-.696.618-1.163.618H16.812z", {["fill"]: "#F4900C",["d"]: "M16.812 33c-.588 0-1.112-.37-1.31-.924L8.549 12.608c-.152-.426-.087-.872.173-1.242.261-.369.685-.563 1.137-.563h16.313c.557 0 1.059.305 1.279.817l8.343 19.455c.184.43.14.917-.116 1.307-.259.39-.696.618-1.163.618H16.812z",}));el.appendChild(svg["path"]("M1.515 33c-.467 0-.904-.236-1.162-.625-.256-.391-.3-.885-.116-1.315l8.348-19.479c.218-.51.722-.843 1.278-.843.557 0 1.061.333 1.279.843L19.49 31.06c.184.431.139.924-.117 1.315-.256.389-.693.625-1.161.625H1.515z", {["fill"]: "#FFCC4D",["d"]: "M1.515 33c-.467 0-.904-.236-1.162-.625-.256-.391-.3-.885-.116-1.315l8.348-19.479c.218-.51.722-.843 1.278-.843.557 0 1.061.333 1.279.843L19.49 31.06c.184.431.139.924-.117 1.315-.256.389-.693.625-1.161.625H1.515z",}));el.appendChild(svg["path"]("M9.859 14.182L7.077 33h5.563z", {["fill"]: "#292F33",["d"]: "M9.859 14.182L7.077 33h5.563z",}));el.appendChild(svg["path"]("M15.46 31.456L16.081 33H12.64zm-11.203 0L3.636 33h3.441z", {["fill"]: "#FFAC33",["d"]: "M15.46 31.456L16.081 33H12.64zm-11.203 0L3.636 33h3.441z",}));el.appendChild(svg["path"]("M12.64 33s2.529-.645 3.766-1.786L9.859 14.182 12.64 33zm-5.563 0s-2.529-.645-3.766-1.786l6.546-17.031L7.077 33z", {["fill"]: "#FFE8B6",["d"]: "M12.64 33s2.529-.645 3.766-1.786L9.859 14.182 12.64 33zm-5.563 0s-2.529-.645-3.766-1.786l6.546-17.031L7.077 33z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};