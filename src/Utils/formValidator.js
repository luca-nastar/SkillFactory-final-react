import dayjs from "dayjs";

export const formValidate = (data) => {
	const { name, cover_img, quote, release_date } = data;

	const actualYear = dayjs().year();
	const urlRegexp =
		/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/;

	if (!name || !cover_img || !quote || !release_date) {
		return { ok: false, msg: "Faltan datos requeridos" };
	}
	if (release_date < 1700) {
		return { ok: false, msg: "El año debe ser mayor a 1700" };
	}
	if (release_date > actualYear) {
		return { ok: false, msg: `El año debe ser menor a ${actualYear}` };
	}
	if (!urlRegexp.test(cover_img)) {
		return { ok: false, msg: " la imagen debe ser una URL valida" };
	}

	return { ok: true };
};
