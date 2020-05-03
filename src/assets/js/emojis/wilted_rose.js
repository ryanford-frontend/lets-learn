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
				el.appendChild(svg["path"]("M22.781 4.715s-5.691-7.14-10.656-3.697c-3.683 2.554-3.667 7.228-3.304 9.478.371 2.298 1.505 7.529 2.194 11.915.69 4.396 1.178 8.329 1.894 12.912.181 1.159 4.068.521 3.964-.613-.177-1.944-1.821-8.965-2.257-12.05-.405-2.865-1.366-8.421-1.929-11.649-.619-3.546-.279-6.676 2.148-7.39 2.787-.819 5.551 3.835 5.551 3.835l2.395-2.741z", {["fill"]: "#78B159",["d"]: "M22.781 4.715s-5.691-7.14-10.656-3.697c-3.683 2.554-3.667 7.228-3.304 9.478.371 2.298 1.505 7.529 2.194 11.915.69 4.396 1.178 8.329 1.894 12.912.181 1.159 4.068.521 3.964-.613-.177-1.944-1.821-8.965-2.257-12.05-.405-2.865-1.366-8.421-1.929-11.649-.619-3.546-.279-6.676 2.148-7.39 2.787-.819 5.551 3.835 5.551 3.835l2.395-2.741z",}));el.appendChild(svg["path"]("M13.081 16.425s1.71.642 2.871 1.803c1.536 1.536 2.471 4.541 1.269 7.947-.739 2.093 1.069 5.074 1.069 5.074s-2.013-1.077-3.272-2.671c-1.279-1.618-2.12-3.833-2.297-5.647-.117-1.197-.174-3.568.36-6.506", {["fill"]: "#C6E4B5",["d"]: "M13.081 16.425s1.71.642 2.871 1.803c1.536 1.536 2.471 4.541 1.269 7.947-.739 2.093 1.069 5.074 1.069 5.074s-2.013-1.077-3.272-2.671c-1.279-1.618-2.12-3.833-2.297-5.647-.117-1.197-.174-3.568.36-6.506",}));el.appendChild(svg["path"]("M10.276 13.977c-.786.363-2.993 3.198-3.242 4.768-1.037 6.55 2.879 10.825 2.879 10.825s.688-3.983 1.761-5.421c1.245-1.67.545-5.677 0-7.151-.391-1.054-1.398-3.021-1.398-3.021", {["fill"]: "#A6D388",["d"]: "M10.276 13.977c-.786.363-2.993 3.198-3.242 4.768-1.037 6.55 2.879 10.825 2.879 10.825s.688-3.983 1.761-5.421c1.245-1.67.545-5.677 0-7.151-.391-1.054-1.398-3.021-1.398-3.021",}));el.appendChild(svg["path"]("M24.735 8.258c-.786 1.067-2.577 1.082-3.999.033-1.423-1.048-1.938-2.763-1.151-3.83.785-1.067 2.576-1.082 3.999-.033 1.423 1.048 1.937 2.763 1.151 3.83", {["fill"]: "#78B159",["d"]: "M24.735 8.258c-.786 1.067-2.577 1.082-3.999.033-1.423-1.048-1.938-2.763-1.151-3.83.785-1.067 2.576-1.082 3.999-.033 1.423 1.048 1.937 2.763 1.151 3.83",}));el.appendChild(svg["path"]("M26.205 5.37c.845 1.281.107 3.255-1.645 4.41-1.752 1.154-3.858 1.052-4.701-.229-.843-1.28-.106-3.254 1.646-4.409 1.753-1.155 3.856-1.053 4.7.228", {["fill"]: "#78B159",["d"]: "M26.205 5.37c.845 1.281.107 3.255-1.645 4.41-1.752 1.154-3.858 1.052-4.701-.229-.843-1.28-.106-3.254 1.646-4.409 1.753-1.155 3.856-1.053 4.7.228",}));el.appendChild(svg["path"]("M20.71 8.144c-.874 1.148-2.897 1.476-2.897 1.476s1.695 1.257 2.733.546c1.038-.71.164-2.022.164-2.022m2.551-3.28c-.055-.82 1.312-2.295 1.967-1.913 0 0-.874.984-.054 1.585.819.601-1.913.328-1.913.328", {["fill"]: "#78B159",["d"]: "M20.71 8.144c-.874 1.148-2.897 1.476-2.897 1.476s1.695 1.257 2.733.546c1.038-.71.164-2.022.164-2.022m2.551-3.28c-.055-.82 1.312-2.295 1.967-1.913 0 0-.874.984-.054 1.585.819.601-1.913.328-1.913.328",}));el.appendChild(svg["path"]("M21.25 8.667c-1.791.958-3.399 3.232-2.56 7.593.726 3.774 3.918 5.321 2.855 7.836-.986 2.335.822 6.097 3.228.392.755-1.788 2.812-9.279.77-13.862-1.23-2.757-3.455-2.408-4.293-1.959z", {["fill"]: "#DA2F47",["d"]: "M21.25 8.667c-1.791.958-3.399 3.232-2.56 7.593.726 3.774 3.918 5.321 2.855 7.836-.986 2.335.822 6.097 3.228.392.755-1.788 2.812-9.279.77-13.862-1.23-2.757-3.455-2.408-4.293-1.959z",}));el.appendChild(svg["path"]("M23.354 7.08c1.322-1.933 3.245-2.175 4.541-.946 6.034 5.724 3.544 16.948-.52 19.367-2.403 1.43-.847-7.209-4.089-10.74-1.905-2.077-1.959-5.273.068-7.681", {["fill"]: "#E75A70",["d"]: "M23.354 7.08c1.322-1.933 3.245-2.175 4.541-.946 6.034 5.724 3.544 16.948-.52 19.367-2.403 1.43-.847-7.209-4.089-10.74-1.905-2.077-1.959-5.273.068-7.681",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};