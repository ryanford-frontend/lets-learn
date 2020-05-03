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
				el.appendChild(svg["circle"](18, 18, 36, {["cy"]: "18",["r"]: "18",["fill"]: "#88C9F9",["cx"]: "18",}));el.appendChild(svg["path"]("M2.812 25.375c-.062-1-.062-1.187-.062-2.375s.562-1 1.125-1.562.438-.625 1.375-1.241.438-1.321.375-1.696-.625-.063-1.563.061-.624-.312-1.187-.562-.812-.625-1.188-1.75-.438-1.438-.312-2.375.563-.063.625.937.938.625.938 1.25 1.25 1.312 1.562 1.5 1.188-.938 1.5-1.25.688-.75.812-1 1.688-.438 2-.438 1.062.938 1.062 1.375.375 1.625.688 2.312 1 .812 1.625 1.312.938.062.938.062-.25-1.062-.25-1.938.75-1.625.75-1.625 1.188.875 1.25 1.125 1 1.125 1.062 1.562.562 1 1.483 1.125.267-1.062.579-1.875.75-.938 1.312-1.062 1-.625 1.375-1.125 1.062-1.188 1-1.75-.25-.938-.5-1.625.75-.938 1.188-1.75 0 0 1-.25.562-.25.75-.625.312-.75.125-1.438-.875 0-1.562 0S22.938 7.75 23 7s.938-.562 1.562-.625.812.812 1 1 2.125-1.25 2.625-1.938-.437-.499-.187-.789-1.5-.349-2.188-.46-2.437-.188-3.124-.612-3.312-.104-4 .237-1.125-.029-1.438-.5-1.625-.235-2-.5-.75.437-1.25.625-.688.25-1.312-.125.187-.813-.688-1.125c-.586-.209-1.288-.087-2.38-.111C3.902 5.092 0 11.087 0 18c0 3.42.971 6.605 2.627 9.327.308-.518.231-1.217.185-1.952zm14.5-1.187c.438.062 1.688 0 .688-.812s-1.562-.188-1.438-1.125-.625-.938-.625-.938c0 .688-.5 1.438 0 2.125s.938.687 1.375.75z", {["fill"]: "#5C913B",["d"]: "M2.812 25.375c-.062-1-.062-1.187-.062-2.375s.562-1 1.125-1.562.438-.625 1.375-1.241.438-1.321.375-1.696-.625-.063-1.563.061-.624-.312-1.187-.562-.812-.625-1.188-1.75-.438-1.438-.312-2.375.563-.063.625.937.938.625.938 1.25 1.25 1.312 1.562 1.5 1.188-.938 1.5-1.25.688-.75.812-1 1.688-.438 2-.438 1.062.938 1.062 1.375.375 1.625.688 2.312 1 .812 1.625 1.312.938.062.938.062-.25-1.062-.25-1.938.75-1.625.75-1.625 1.188.875 1.25 1.125 1 1.125 1.062 1.562.562 1 1.483 1.125.267-1.062.579-1.875.75-.938 1.312-1.062 1-.625 1.375-1.125 1.062-1.188 1-1.75-.25-.938-.5-1.625.75-.938 1.188-1.75 0 0 1-.25.562-.25.75-.625.312-.75.125-1.438-.875 0-1.562 0S22.938 7.75 23 7s.938-.562 1.562-.625.812.812 1 1 2.125-1.25 2.625-1.938-.437-.499-.187-.789-1.5-.349-2.188-.46-2.437-.188-3.124-.612-3.312-.104-4 .237-1.125-.029-1.438-.5-1.625-.235-2-.5-.75.437-1.25.625-.688.25-1.312-.125.187-.813-.688-1.125c-.586-.209-1.288-.087-2.38-.111C3.902 5.092 0 11.087 0 18c0 3.42.971 6.605 2.627 9.327.308-.518.231-1.217.185-1.952zm14.5-1.187c.438.062 1.688 0 .688-.812s-1.562-.188-1.438-1.125-.625-.938-.625-.938c0 .688-.5 1.438 0 2.125s.938.687 1.375.75z",}));el.appendChild(svg["path"]("M23.688 13.75c-1-.812-.25-.562-.125-1.5s-.625-.938-.625-.938c0 .688-.5 1.438 0 2.125s-1 1.25-.562 1.312 2.312-.187 1.312-.999zm-3.88 9.75c.62.688.38 0 1.192-.312s-.688-1-1.188-1.375-.997-.389-1.434.438c-.496.937.81.561 1.43 1.249zm7.317 1.25c-.312-.375-1-.562-1.75-.545-.75.018-.688-.83-1.438-.768s-1.286-.504-1.625-.679c-.737-.38-.25.491 0 1.446s1.188.232 2.062.732.938-.188 1.75.062 1.125.812 1.904.75-.59-.623-.903-.998zM25.5 27.5c-.312-.625-1.226-1.188-1.601-1.505s-.962-.424-1.462-.24-.812 0-1.062-.495-.688-.322-1.062-.26-1.875.688-2.75 1.125-1.273.817-1.847 1.375c-.898.874-.403.312 0 .875.403.562-.442 2.312-.504 3.312s1.602-.312 2.227-.438.441-.5.941-.875.825-.463 1.374.037c.549.5 1.268.963 1.268 1.525s1.979 1.5 2.729 1.125 1.188-1.125 1.875-1.75.438-1.812.625-2.562-.439-.624-.751-1.249z", {["fill"]: "#5C913B",["d"]: "M23.688 13.75c-1-.812-.25-.562-.125-1.5s-.625-.938-.625-.938c0 .688-.5 1.438 0 2.125s-1 1.25-.562 1.312 2.312-.187 1.312-.999zm-3.88 9.75c.62.688.38 0 1.192-.312s-.688-1-1.188-1.375-.997-.389-1.434.438c-.496.937.81.561 1.43 1.249zm7.317 1.25c-.312-.375-1-.562-1.75-.545-.75.018-.688-.83-1.438-.768s-1.286-.504-1.625-.679c-.737-.38-.25.491 0 1.446s1.188.232 2.062.732.938-.188 1.75.062 1.125.812 1.904.75-.59-.623-.903-.998zM25.5 27.5c-.312-.625-1.226-1.188-1.601-1.505s-.962-.424-1.462-.24-.812 0-1.062-.495-.688-.322-1.062-.26-1.875.688-2.75 1.125-1.273.817-1.847 1.375c-.898.874-.403.312 0 .875.403.562-.442 2.312-.504 3.312s1.602-.312 2.227-.438.441-.5.941-.875.825-.463 1.374.037c.549.5 1.268.963 1.268 1.525s1.979 1.5 2.729 1.125 1.188-1.125 1.875-1.75.438-1.812.625-2.562-.439-.624-.751-1.249z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};