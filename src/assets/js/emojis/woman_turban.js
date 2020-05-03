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
				el.appendChild(svg["path"]("M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z", {["fill"]: "#9266CC",["d"]: "M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z",}));el.appendChild(svg["path"]("M14.221 31.274C14.756 33.168 16.258 34.5 18 34.5s3.244-1.332 3.779-3.226C23.788 30.425 25 28.938 25 27.25c0-.061-.01-.121-.014-.181-.33-.042-.66-.069-.986-.069H12c-.326 0-.656.027-.986.069-.004.06-.014.12-.014.181 0 1.688 1.212 3.175 3.221 4.024z", {["fill"]: "#744EAA",["d"]: "M14.221 31.274C14.756 33.168 16.258 34.5 18 34.5s3.244-1.332 3.779-3.226C23.788 30.425 25 28.938 25 27.25c0-.061-.01-.121-.014-.181-.33-.042-.66-.069-.986-.069H12c-.326 0-.656.027-.986.069-.004.06-.014.12-.014.181 0 1.688 1.212 3.175 3.221 4.024z",}));el.appendChild(svg["path"]("M23.479 27H21.66v-3.185h-7.32V27h-1.818c-.011.083-.021.166-.021.25 0 1.27 1.235 2.366 3.031 2.901C15.685 31.755 16.726 33 18 33s2.315-1.245 2.469-2.849c1.796-.535 3.031-1.632 3.031-2.901 0-.084-.011-.167-.021-.25z", {["fill"]: "#FFDC5D",["d"]: "M23.479 27H21.66v-3.185h-7.32V27h-1.818c-.011.083-.021.166-.021.25 0 1.27 1.235 2.366 3.031 2.901C15.685 31.755 16.726 33 18 33s2.315-1.245 2.469-2.849c1.796-.535 3.031-1.632 3.031-2.901 0-.084-.011-.167-.021-.25z",}));el.appendChild(svg["path"]("M14.321 25.179c1.023 1.155 2.291 1.468 3.669 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.339v2.936z", {["fill"]: "#F9CA55",["d"]: "M14.321 25.179c1.023 1.155 2.291 1.468 3.669 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.339v2.936z",}));el.appendChild(svg["path"]("M27.833 15.936c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623m-16.389 0c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623", {["fill"]: "#FFDC5D",["d"]: "M27.833 15.936c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623m-16.389 0c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623",}));el.appendChild(svg["path"]("M9.734 15.717c0-5.834 3.676-10.563 8.21-10.563 4.534 0 8.211 4.729 8.211 10.563 0 5.833-3.677 10.286-8.211 10.286-4.534 0-8.21-4.452-8.21-10.286", {["fill"]: "#FFDC5D",["d"]: "M9.734 15.717c0-5.834 3.676-10.563 8.21-10.563 4.534 0 8.211 4.729 8.211 10.563 0 5.833-3.677 10.286-8.211 10.286-4.534 0-8.21-4.452-8.21-10.286",}));el.appendChild(svg["path"]("M17.944 23.543c-1.605 0-2.446-.794-2.536-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.96-.007.035.032.553.491 1.576.491 1.039 0 1.557-.473 1.577-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.089.091-.929.885-2.536.885", {["fill"]: "#DF1F32",["d"]: "M17.944 23.543c-1.605 0-2.446-.794-2.536-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.96-.007.035.032.553.491 1.576.491 1.039 0 1.557-.473 1.577-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.089.091-.929.885-2.536.885",}));el.appendChild(svg["path"]("M14.608 17.886c-.465 0-.846-.381-.846-.846v-.845c0-.465.381-.846.846-.846s.847.381.847.846v.845c0 .465-.382.846-.847.846m6.765 0c-.465 0-.846-.381-.846-.846v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .465-.381.846-.846.846", {["fill"]: "#662113",["d"]: "M14.608 17.886c-.465 0-.846-.381-.846-.846v-.845c0-.465.381-.846.846-.846s.847.381.847.846v.845c0 .465-.382.846-.847.846m6.765 0c-.465 0-.846-.381-.846-.846v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .465-.381.846-.846.846",}));el.appendChild(svg["path"]("M18.837 20.5h-1.691c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.691c.232 0 .423.19.423.424v.153c0 .233-.191.423-.423.423", {["fill"]: "#C1694F",["d"]: "M18.837 20.5h-1.691c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.691c.232 0 .423.19.423.424v.153c0 .233-.191.423-.423.423",}));el.appendChild(svg["path"]("M18 9.729s6.752 1.756 7.787 4.916c.451-.965.713-3.138.713-4.33C26.5 6.688 23.5 4 19.062 4h-2.125C13.042 4 9.5 6.688 9.5 10.314c0 1.192.262 3.491.712 4.455C11.248 11.608 18 9.729 18 9.729z", {["fill"]: "#E6E7E8",["d"]: "M18 9.729s6.752 1.756 7.787 4.916c.451-.965.713-3.138.713-4.33C26.5 6.688 23.5 4 19.062 4h-2.125C13.042 4 9.5 6.688 9.5 10.314c0 1.192.262 3.491.712 4.455C11.248 11.608 18 9.729 18 9.729z",}));el.appendChild(svg["path"]("M23.901 9.251c.65-.086 1.299-.145 1.945-.145.192 0 .36-.086.48-.217-.097-.374-.232-.732-.401-1.075-.027-.004-.051-.016-.079-.016-2.677 0-5.386.671-8.054 1.991l.208-.06s.771.201 1.829.587c.615-.245 1.232-.44 1.848-.612.014.006.024.017.039.022 1.573.524 3.292 1.564 4.603 2.761.079-.548.133-1.101.159-1.586-.797-.636-1.679-1.191-2.577-1.65zM9.61 11.973c1.895-1.354 8.186-5.421 15.433-5.477-.41-.473-.89-.894-1.426-1.253-6.334.471-11.749 3.626-14.113 5.215.01.43.044.957.106 1.515zm.067-3.093c2.339-1.498 6.791-3.734 11.74-4.596C20.666 4.062 19.873 4 19.062 4h-1.667c-2.572 1-4.866 1.815-6.632 2.788-.505.641-.882 1.304-1.086 2.092z", {["fill"]: "#D1D3D4",["d"]: "M23.901 9.251c.65-.086 1.299-.145 1.945-.145.192 0 .36-.086.48-.217-.097-.374-.232-.732-.401-1.075-.027-.004-.051-.016-.079-.016-2.677 0-5.386.671-8.054 1.991l.208-.06s.771.201 1.829.587c.615-.245 1.232-.44 1.848-.612.014.006.024.017.039.022 1.573.524 3.292 1.564 4.603 2.761.079-.548.133-1.101.159-1.586-.797-.636-1.679-1.191-2.577-1.65zM9.61 11.973c1.895-1.354 8.186-5.421 15.433-5.477-.41-.473-.89-.894-1.426-1.253-6.334.471-11.749 3.626-14.113 5.215.01.43.044.957.106 1.515zm.067-3.093c2.339-1.498 6.791-3.734 11.74-4.596C20.666 4.062 19.873 4 19.062 4h-1.667c-2.572 1-4.866 1.815-6.632 2.788-.505.641-.882 1.304-1.086 2.092z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};