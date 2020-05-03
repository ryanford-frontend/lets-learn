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
				el.appendChild(svg["path"]("M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z", {["fill"]: "#CE1B26",["d"]: "M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#002B7F",["d"]: "M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M12.516 11.415c0-.744-.585-1.334-1.428-1.334-.892 0-1.873.3-2.623.468h-.568c-.75-.167-1.73-.468-2.623-.468-.843 0-1.428.59-1.428 1.334 0 .889.328 1.545.726 2.317h7.217c.399-.772.727-1.428.727-2.317z", {["fill"]: "#B28914",["d"]: "M12.516 11.415c0-.744-.585-1.334-1.428-1.334-.892 0-1.873.3-2.623.468h-.568c-.75-.167-1.73-.468-2.623-.468-.843 0-1.428.59-1.428 1.334 0 .889.328 1.545.726 2.317h7.217c.399-.772.727-1.428.727-2.317z",}));el.appendChild(svg["path"]("M7.826 10.408l-.023.328c-.626-.095-1.513-.445-2.341-.445-.764 0-1.357.306-1.357 1.077 0 .76.322 1.451.75 2.153l-.445.211c-.397-.772-.725-1.429-.725-2.317 0-.744.584-1.475 1.591-1.475.891 0 1.801.301 2.55.468zm.711 0l.023.328c.626-.095 1.513-.445 2.341-.445.765 0 1.357.306 1.357 1.077 0 .76-.322 1.451-.75 2.153l.445.211c.397-.772.725-1.429.725-2.317 0-.744-.584-1.475-1.591-1.475-.891 0-1.801.301-2.55.468zm-.356-3.382l-.262.492.262.49.263-.49zm0 1.242l-.262.49.262.492.263-.492zm-.935-.13l.414.262.412-.262-.412-.263zm1.045 0l.412.262.414-.262-.414-.263z", {["fill"]: "#FFD83D",["d"]: "M7.826 10.408l-.023.328c-.626-.095-1.513-.445-2.341-.445-.764 0-1.357.306-1.357 1.077 0 .76.322 1.451.75 2.153l-.445.211c-.397-.772-.725-1.429-.725-2.317 0-.744.584-1.475 1.591-1.475.891 0 1.801.301 2.55.468zm.711 0l.023.328c.626-.095 1.513-.445 2.341-.445.765 0 1.357.306 1.357 1.077 0 .76-.322 1.451-.75 2.153l.445.211c.397-.772.725-1.429.725-2.317 0-.744-.584-1.475-1.591-1.475-.891 0-1.801.301-2.55.468zm-.356-3.382l-.262.492.262.49.263-.49zm0 1.242l-.262.49.262.492.263-.492zm-.935-.13l.414.262.412-.262-.412-.263zm1.045 0l.412.262.414-.262-.414-.263z",}));el.appendChild(svg["path"]("M8.181 7.945c.11 0 .199.088.199.198 0 .11-.089.199-.199.199-.109 0-.199-.088-.199-.199 0-.109.09-.198.199-.198zm0 .936c.294 0 .533.238.533.533 0 .293-.238.531-.533.531-.294 0-.532-.238-.532-.531 0-.294.238-.533.532-.533zm0 3.319c-.658 0-1.141.311-1.17 1.1-.161-.283-.841-1.173-1.476-1.054-.376.071-.71.594-.653 1.194-.313-.898-1.228-1.046-1.896-.515.593.488.857 1.927 1.356 2.552h7.68c.499-.625.764-2.064 1.357-2.552-.668-.531-1.583-.383-1.895.515.055-.6-.279-1.124-.657-1.194-.634-.119-1.313.771-1.474 1.054-.03-.79-.514-1.1-1.172-1.1z", {["fill"]: "#FFD83D",["d"]: "M8.181 7.945c.11 0 .199.088.199.198 0 .11-.089.199-.199.199-.109 0-.199-.088-.199-.199 0-.109.09-.198.199-.198zm0 .936c.294 0 .533.238.533.533 0 .293-.238.531-.533.531-.294 0-.532-.238-.532-.531 0-.294.238-.533.532-.533zm0 3.319c-.658 0-1.141.311-1.17 1.1-.161-.283-.841-1.173-1.476-1.054-.376.071-.71.594-.653 1.194-.313-.898-1.228-1.046-1.896-.515.593.488.857 1.927 1.356 2.552h7.68c.499-.625.764-2.064 1.357-2.552-.668-.531-1.583-.383-1.895.515.055-.6-.279-1.124-.657-1.194-.634-.119-1.313.771-1.474 1.054-.03-.79-.514-1.1-1.172-1.1z",}));el.appendChild(svg["path"]("M11.718 15.253c-.591-.164-1.95-.246-3.537-.247-1.057 0-2.015.037-2.71.11-.348.036-.629.082-.827.137-.194.058-.319.111-.329.224.009.112.132.175.326.249.591.211 1.951.386 3.539.386 1.058 0 2.017-.078 2.712-.192.348-.057.63-.123.827-.194.195-.073.317-.137.326-.249-.008-.114-.133-.167-.327-.224z", {["d"]: "M11.718 15.253c-.591-.164-1.95-.246-3.537-.247-1.057 0-2.015.037-2.71.11-.348.036-.629.082-.827.137-.194.058-.319.111-.329.224.009.112.132.175.326.249.591.211 1.951.386 3.539.386 1.058 0 2.017-.078 2.712-.192.348-.057.63-.123.827-.194.195-.073.317-.137.326-.249-.008-.114-.133-.167-.327-.224z",}));el.appendChild(svg["path"]("M7.715 10.383s.585.084.931 0c0 0 .135 1.197.252 1.641 0 0-.412-.117-.702-.117s-.733.117-.733.117.083-.539.146-.898.106-.743.106-.743zm-4.403 1.635c-.189-.804-.198-1.625.817-2.324s2.708-.109 3.176.007.478.627-.096.484-2.183-.591-2.959.102-.626 1.204-.507 1.614c.344 1.181-.284.744-.431.117zm9.739.046c.189-.804.198-1.625-.817-2.324s-2.708-.109-3.176.008-.478.627.096.484 2.183-.591 2.959.102.621 1.202.507 1.614c-.261.945.283.743.431.116z", {["fill"]: "#FFD83D",["d"]: "M7.715 10.383s.585.084.931 0c0 0 .135 1.197.252 1.641 0 0-.412-.117-.702-.117s-.733.117-.733.117.083-.539.146-.898.106-.743.106-.743zm-4.403 1.635c-.189-.804-.198-1.625.817-2.324s2.708-.109 3.176.007.478.627-.096.484-2.183-.591-2.959.102-.626 1.204-.507 1.614c.344 1.181-.284.744-.431.117zm9.739.046c.189-.804.198-1.625-.817-2.324s-2.708-.109-3.176.008-.478.627.096.484 2.183-.591 2.959.102.621 1.202.507 1.614c-.261.945.283.743.431.116z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};