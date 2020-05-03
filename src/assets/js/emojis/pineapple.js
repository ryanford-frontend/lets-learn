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
				el.appendChild(svg["path"]("M18.241 9.633c-.277-3.307 2.17-4.72 2.17-4.72-3.199.113-4.894 2.826-4.894 2.826-.752-1.3.946-4.012 2.169-4.719-3.198.113-3.67 2.12-3.67 2.12-1.503-2.601-1.03-4.607-1.03-4.607-1.121.647-1.767 2.113-2.141 3.512l-2.318-2.67c-.23 1.044.157 3.174.573 4.959-3.055-1.79-5.903-.15-5.903-.15 3.95 1.188 5.45 3.788 5.45 3.788s-3.948-1.187-5.646 1.526c2.597-.092 4.5.499 5.856 1.23-1.163.289-3.145-.236-4.355 1.371 0 0 3.198-.113 3.851 1.055-2.172.614-3.575 2.251-3.575 2.251 4.422-.818 9.123 1.669 9.123 1.669l6.119-3.532c-1.029-4.607 2.642-6.727 2.642-6.727-2.724-1.895-4.421.818-4.421.818z", {["fill"]: "#5C913B",["d"]: "M18.241 9.633c-.277-3.307 2.17-4.72 2.17-4.72-3.199.113-4.894 2.826-4.894 2.826-.752-1.3.946-4.012 2.169-4.719-3.198.113-3.67 2.12-3.67 2.12-1.503-2.601-1.03-4.607-1.03-4.607-1.121.647-1.767 2.113-2.141 3.512l-2.318-2.67c-.23 1.044.157 3.174.573 4.959-3.055-1.79-5.903-.15-5.903-.15 3.95 1.188 5.45 3.788 5.45 3.788s-3.948-1.187-5.646 1.526c2.597-.092 4.5.499 5.856 1.23-1.163.289-3.145-.236-4.355 1.371 0 0 3.198-.113 3.851 1.055-2.172.614-3.575 2.251-3.575 2.251 4.422-.818 9.123 1.669 9.123 1.669l6.119-3.532c-1.029-4.607 2.642-6.727 2.642-6.727-2.724-1.895-4.421.818-4.421.818z",}));el.appendChild(svg["path"]("M29.56 22.88c2.488 4.309 1.218 9.7-2.837 12.041-4.055 2.341-9.359.746-11.846-3.562l-1.589-2.753c-2.488-4.31-1.217-9.699 2.837-12.04 4.055-2.341 9.359-.747 11.846 3.562l1.589 2.752z", {["fill"]: "#FFAC33",["d"]: "M29.56 22.88c2.488 4.309 1.218 9.7-2.837 12.041-4.055 2.341-9.359.746-11.846-3.562l-1.589-2.753c-2.488-4.31-1.217-9.699 2.837-12.04 4.055-2.341 9.359-.747 11.846 3.562l1.589 2.752z",}));el.appendChild(svg["path"]("M30.562 25.364c-.209-.848-.54-1.685-1.002-2.484l-.186-.323v.001l-1.951-.828.624-1.471-.075-.131c-2.025-3.51-5.92-5.217-9.486-4.466l-.818 1.926-1.884-.8c-3.28 2.122-4.567 6.319-3.262 10.128l1.006.427-.401.946c.055.105.102.212.163.315l1.589 2.753c.685 1.187 1.59 2.16 2.618 2.909l.229-.538 1.951.828-.324.764c.665.277 1.357.465 2.061.572l.215-.507 1.403.595c1.144-.048 2.28-.336 3.343-.883l-.017-.007.828-1.951 1.189.504c.522-.521.973-1.104 1.334-1.736l-1.693-.72.828-1.951 1.667.707c.191-.7.301-1.427.316-2.167l-1.155-.49.828-1.951.062.029zm-6.212-7.243l1.95.829-.828 1.95-1.951-.828.829-1.951zm.294 4.731l-.828 1.95-1.951-.827.828-1.951 1.951.828zm-4.197-6.387l1.951.828-.829 1.952-1.951-.828.829-1.952zm-1.656 3.902l1.951.828-.828 1.951-1.95-.828.827-1.951zm-3.902-1.655l1.95.828-.828 1.949-1.95-.828.828-1.949zm-2.484 5.853l.828-1.952 1.951.828-.829 1.952-1.95-.828zm4.196 6.385l-1.951-.827.828-1.951 1.951.828-.828 1.95zm-.295-4.73l.829-1.951 1.951.827-.829 1.952-1.951-.828zm4.196 6.386l-1.95-.828.828-1.95 1.95.829-.828 1.949zm-.294-4.73l.828-1.952 1.951.829-.828 1.952-1.951-.829zm4.197 6.388l-1.951-.828.828-1.951 1.951.828-.828 1.951zm1.657-3.904l-1.95-.827.828-1.952 1.95.828-.828 1.951zm1.656-3.901l-1.951-.828.828-1.95 1.951.827-.828 1.951z", {["fill"]: "#FFCC4D",["d"]: "M30.562 25.364c-.209-.848-.54-1.685-1.002-2.484l-.186-.323v.001l-1.951-.828.624-1.471-.075-.131c-2.025-3.51-5.92-5.217-9.486-4.466l-.818 1.926-1.884-.8c-3.28 2.122-4.567 6.319-3.262 10.128l1.006.427-.401.946c.055.105.102.212.163.315l1.589 2.753c.685 1.187 1.59 2.16 2.618 2.909l.229-.538 1.951.828-.324.764c.665.277 1.357.465 2.061.572l.215-.507 1.403.595c1.144-.048 2.28-.336 3.343-.883l-.017-.007.828-1.951 1.189.504c.522-.521.973-1.104 1.334-1.736l-1.693-.72.828-1.951 1.667.707c.191-.7.301-1.427.316-2.167l-1.155-.49.828-1.951.062.029zm-6.212-7.243l1.95.829-.828 1.95-1.951-.828.829-1.951zm.294 4.731l-.828 1.95-1.951-.827.828-1.951 1.951.828zm-4.197-6.387l1.951.828-.829 1.952-1.951-.828.829-1.952zm-1.656 3.902l1.951.828-.828 1.951-1.95-.828.827-1.951zm-3.902-1.655l1.95.828-.828 1.949-1.95-.828.828-1.949zm-2.484 5.853l.828-1.952 1.951.828-.829 1.952-1.95-.828zm4.196 6.385l-1.951-.827.828-1.951 1.951.828-.828 1.95zm-.295-4.73l.829-1.951 1.951.827-.829 1.952-1.951-.828zm4.196 6.386l-1.95-.828.828-1.95 1.95.829-.828 1.949zm-.294-4.73l.828-1.952 1.951.829-.828 1.952-1.951-.829zm4.197 6.388l-1.951-.828.828-1.951 1.951.828-.828 1.951zm1.657-3.904l-1.95-.827.828-1.952 1.95.828-.828 1.951zm1.656-3.901l-1.951-.828.828-1.95 1.951.827-.828 1.951z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};