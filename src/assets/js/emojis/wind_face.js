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
				el.appendChild(svg["path"]("M33.052 20.252c0 1.783-1.431 3.227-3.197 3.227s-3.197-1.444-3.197-3.227c0-1.782 1.431-3.229 3.197-3.229s3.197 1.447 3.197 3.229z", {["d"]: "M33.052 20.252c0 1.783-1.431 3.227-3.197 3.227s-3.197-1.444-3.197-3.227c0-1.782 1.431-3.229 3.197-3.229s3.197 1.447 3.197 3.229z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M35.833 22.565c0 1.536-1.245 2.781-2.781 2.781s-2.781-1.245-2.781-2.781c0-1.535 1.245-2.78 2.781-2.78s2.781 1.245 2.781 2.78z", {["d"]: "M35.833 22.565c0 1.536-1.245 2.781-2.781 2.781s-2.781-1.245-2.781-2.781c0-1.535 1.245-2.78 2.781-2.78s2.781 1.245 2.781 2.78z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M34.595 27.072c0 1.761-1.427 3.188-3.188 3.188-1.76 0-3.188-1.427-3.188-3.188 0-1.76 1.428-3.187 3.188-3.187 1.761.001 3.188 1.427 3.188 3.187z", {["d"]: "M34.595 27.072c0 1.761-1.427 3.188-3.188 3.188-1.76 0-3.188-1.427-3.188-3.188 0-1.76 1.428-3.187 3.188-3.187 1.761.001 3.188 1.427 3.188 3.187z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M30.271 27.288c0 .879-.996 1.592-2.225 1.592s-2.224-.713-2.224-1.592c0-.878.995-1.591 2.224-1.591s2.225.713 2.225 1.591zm-1.248-5.777s-2.968.951-5.789.504c2.479 1.871 6.845.998 6.845.998l-1.056-1.502z", {["d"]: "M30.271 27.288c0 .879-.996 1.592-2.225 1.592s-2.224-.713-2.224-1.592c0-.878.995-1.591 2.224-1.591s2.225.713 2.225 1.591zm-1.248-5.777s-2.968.951-5.789.504c2.479 1.871 6.845.998 6.845.998l-1.056-1.502z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M29.221 23.335c-.087.021-3.002.551-7.037.145 1.222 1.227 6.482 1.358 7.438 1.033.953-.325-.401-1.178-.401-1.178zm.686 4s-2.422-1.123-6.673-1.988c2.896-.836 7.366.2 7.824.865.46.665-1.151 1.123-1.151 1.123z", {["d"]: "M29.221 23.335c-.087.021-3.002.551-7.037.145 1.222 1.227 6.482 1.358 7.438 1.033.953-.325-.401-1.178-.401-1.178zm.686 4s-2.422-1.123-6.673-1.988c2.896-.836 7.366.2 7.824.865.46.665-1.151 1.123-1.151 1.123z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M32.463 24.292c0 2.275-.999 4.12-2.232 4.12s-2.233-1.845-2.233-4.12c0-2.277 1-4.122 2.233-4.122s2.232 1.845 2.232 4.122z", {["d"]: "M32.463 24.292c0 2.275-.999 4.12-2.232 4.12s-2.233-1.845-2.233-4.12c0-2.277 1-4.122 2.233-4.122s2.232 1.845 2.232 4.122z",["fill"]: "#BBDDF5",}));el.appendChild(svg["path"]("M1.902 8.125s2.803 2.014 5.365.19c4.217-3.002 8.742-3.165 11.14-1.889 2.686 1.427 4.563 4.921 3.104 7.544-1.792 3.231-.551 4.065.6 4.608 1.186.562-.338 1.859-1.008 2.018-.668.16.297 1.501 1.039 1.501-.232.925-.643 1.349-1.05 1.539.612.353.868 1.495.484 1.578-.813.176-1.491.524-1.771 1.156-1.684 3.818-3.475-1.509-7.986 1.268-4.897 3.013-9.855-2.424-7.299-6.395-3.307-.658-4.104-4.176-1.807-6.057-2.561-1.374-3.186-5.624-.811-7.061z", {["fill"]: "#CCD6DD",["d"]: "M1.902 8.125s2.803 2.014 5.365.19c4.217-3.002 8.742-3.165 11.14-1.889 2.686 1.427 4.563 4.921 3.104 7.544-1.792 3.231-.551 4.065.6 4.608 1.186.562-.338 1.859-1.008 2.018-.668.16.297 1.501 1.039 1.501-.232.925-.643 1.349-1.05 1.539.612.353.868 1.495.484 1.578-.813.176-1.491.524-1.771 1.156-1.684 3.818-3.475-1.509-7.986 1.268-4.897 3.013-9.855-2.424-7.299-6.395-3.307-.658-4.104-4.176-1.807-6.057-2.561-1.374-3.186-5.624-.811-7.061z",}));el.appendChild(svg["path"]("M1.636 16.646s-1.492 3.71 2.886 4.598c3.52.714 5.645-1.911 5.645-1.911s-2.795 1.831-5.75.645c-2.955-1.187-2.781-3.332-2.781-3.332zm.266-8.521S.042 9 .208 11.625C.375 14.25 2.375 15.916 4.75 15c-3.708-.458-5.25-4.542-2.848-6.875z", {["fill"]: "#99AAB5",["d"]: "M1.636 16.646s-1.492 3.71 2.886 4.598c3.52.714 5.645-1.911 5.645-1.911s-2.795 1.831-5.75.645c-2.955-1.187-2.781-3.332-2.781-3.332zm.266-8.521S.042 9 .208 11.625C.375 14.25 2.375 15.916 4.75 15c-3.708-.458-5.25-4.542-2.848-6.875z",}));el.appendChild(svg["path"]("M4.522 21.244s-1.853 2.135 0 5.133 5.027 2.225 5.826 1.923c-5.139.772-6.749-5.232-4.569-6.933 2.179-1.7-1.257-.123-1.257-.123zm17.621.854s-.471.871-1.674.934c-.542.028.071.671.624.605.433-.051.781-.441 1.05-1.539zm-.483 3.063c.164-.142-.535-.54-1.129-.304-.594.236-.777 1.994-1.443 2.623 1.084-1.121.798-1.591 1.678-1.941.467-.186.726-.232.894-.378zm.885-5.994s.006 1.048-1.613 1.534-.94-.508-.088-.576c1.468-.117 1.699-.96 1.701-.958zm-2.378-1.708s.097-.722-.13-1.266c-.167-.402-.037.572-.949 1.022-.985.486-2.072.534-2.072.534s1.968.845 3.151-.29zm1.852-5.427s.325 3.562-3.675 3.718c-4 .156-7.469-3.718-7.469-3.718s3.719 3.25 7.5 2.968c3.781-.281 3.644-2.968 3.644-2.968z", {["fill"]: "#99AAB5",["d"]: "M4.522 21.244s-1.853 2.135 0 5.133 5.027 2.225 5.826 1.923c-5.139.772-6.749-5.232-4.569-6.933 2.179-1.7-1.257-.123-1.257-.123zm17.621.854s-.471.871-1.674.934c-.542.028.071.671.624.605.433-.051.781-.441 1.05-1.539zm-.483 3.063c.164-.142-.535-.54-1.129-.304-.594.236-.777 1.994-1.443 2.623 1.084-1.121.798-1.591 1.678-1.941.467-.186.726-.232.894-.378zm.885-5.994s.006 1.048-1.613 1.534-.94-.508-.088-.576c1.468-.117 1.699-.96 1.701-.958zm-2.378-1.708s.097-.722-.13-1.266c-.167-.402-.037.572-.949 1.022-.985.486-2.072.534-2.072.534s1.968.845 3.151-.29zm1.852-5.427s.325 3.562-3.675 3.718c-4 .156-7.469-3.718-7.469-3.718s3.719 3.25 7.5 2.968c3.781-.281 3.644-2.968 3.644-2.968z",}));el.appendChild(svg["path"]("M16.792 15.254s-1.417 2.454-5.5 2.496-4.458-3.541-4.458-3.541.955 3.404 5.25 2.883c2.917-.354 3.708-2.133 3.708-2.133l1 .295z", {["fill"]: "#99AAB5",["d"]: "M16.792 15.254s-1.417 2.454-5.5 2.496-4.458-3.541-4.458-3.541.955 3.404 5.25 2.883c2.917-.354 3.708-2.133 3.708-2.133l1 .295z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};