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
				el.appendChild(svg["path"]("M31.538 21.572C32.466 22.612 33 23.771 33 25c0 4.418-6.715 8-15 8-8.284 0-15-3.582-15-8 0-1.229.535-2.388 1.462-3.428C2.299 23.082 1 24.959 1 27c0 4.971 7.611 9 17 9s17-4.029 17-9c0-2.041-1.299-3.918-3.462-5.428z", {["fill"]: "#DD2E44",["d"]: "M31.538 21.572C32.466 22.612 33 23.771 33 25c0 4.418-6.715 8-15 8-8.284 0-15-3.582-15-8 0-1.229.535-2.388 1.462-3.428C2.299 23.082 1 24.959 1 27c0 4.971 7.611 9 17 9s17-4.029 17-9c0-2.041-1.299-3.918-3.462-5.428z",}));el.appendChild(svg["path"]("M9.001 27.5c-.55 0-1.08-.304-1.343-.829-.37-.741-.07-1.642.671-2.013.12-.062 3.171-1.692 3.171-5.658 0-2.127-1.164-3.634-2.396-5.229C7.824 12.114 6.5 10.4 6.5 8c0-4.569 2.34-6.961 2.439-7.061.586-.586 1.535-.586 2.121 0 .583.582.586 1.524.011 2.11C10.986 3.14 9.5 4.762 9.5 8c0 1.376.917 2.564 1.978 3.938C12.825 13.68 14.5 15.849 14.5 19c0 5.859-4.632 8.243-4.829 8.342-.215.107-.444.158-.67.158z", {["fill"]: "#DD2E44",["d"]: "M9.001 27.5c-.55 0-1.08-.304-1.343-.829-.37-.741-.07-1.642.671-2.013.12-.062 3.171-1.692 3.171-5.658 0-2.127-1.164-3.634-2.396-5.229C7.824 12.114 6.5 10.4 6.5 8c0-4.569 2.34-6.961 2.439-7.061.586-.586 1.535-.586 2.121 0 .583.582.586 1.524.011 2.11C10.986 3.14 9.5 4.762 9.5 8c0 1.376.917 2.564 1.978 3.938C12.825 13.68 14.5 15.849 14.5 19c0 5.859-4.632 8.243-4.829 8.342-.215.107-.444.158-.67.158z",}));el.appendChild(svg["path"]("M16.001 27.5c-.55 0-1.08-.304-1.343-.829-.37-.741-.07-1.642.671-2.013.12-.062 3.171-1.692 3.171-5.658 0-2.127-1.164-3.634-2.396-5.229C14.824 12.114 13.5 10.4 13.5 8c0-4.569 2.34-6.961 2.439-7.061.586-.586 1.535-.586 2.121 0 .583.582.586 1.524.011 2.11C17.986 3.14 16.5 4.762 16.5 8c0 1.376.917 2.564 1.978 3.938C19.824 13.68 21.5 15.849 21.5 19c0 5.859-4.632 8.243-4.829 8.342-.215.107-.444.158-.67.158z", {["fill"]: "#DD2E44",["d"]: "M16.001 27.5c-.55 0-1.08-.304-1.343-.829-.37-.741-.07-1.642.671-2.013.12-.062 3.171-1.692 3.171-5.658 0-2.127-1.164-3.634-2.396-5.229C14.824 12.114 13.5 10.4 13.5 8c0-4.569 2.34-6.961 2.439-7.061.586-.586 1.535-.586 2.121 0 .583.582.586 1.524.011 2.11C17.986 3.14 16.5 4.762 16.5 8c0 1.376.917 2.564 1.978 3.938C19.824 13.68 21.5 15.849 21.5 19c0 5.859-4.632 8.243-4.829 8.342-.215.107-.444.158-.67.158z",}));el.appendChild(svg["path"]("M23.001 27.5c-.55 0-1.08-.304-1.343-.829-.37-.741-.07-1.642.671-2.013.12-.062 3.171-1.692 3.171-5.658 0-2.127-1.164-3.634-2.396-5.229C21.824 12.114 20.5 10.4 20.5 8c0-4.569 2.34-6.961 2.44-7.061.586-.586 1.535-.586 2.121 0 .582.582.586 1.524.011 2.11C24.986 3.14 23.5 4.762 23.5 8c0 1.376.917 2.564 1.979 3.938C26.824 13.68 28.5 15.849 28.5 19c0 5.859-4.632 8.243-4.829 8.342-.216.107-.444.158-.67.158z", {["fill"]: "#DD2E44",["d"]: "M23.001 27.5c-.55 0-1.08-.304-1.343-.829-.37-.741-.07-1.642.671-2.013.12-.062 3.171-1.692 3.171-5.658 0-2.127-1.164-3.634-2.396-5.229C21.824 12.114 20.5 10.4 20.5 8c0-4.569 2.34-6.961 2.44-7.061.586-.586 1.535-.586 2.121 0 .582.582.586 1.524.011 2.11C24.986 3.14 23.5 4.762 23.5 8c0 1.376.917 2.564 1.979 3.938C26.824 13.68 28.5 15.849 28.5 19c0 5.859-4.632 8.243-4.829 8.342-.216.107-.444.158-.67.158z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};