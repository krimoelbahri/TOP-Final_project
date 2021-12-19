import moment from "moment";

export function age(date) {
	let diff = Math.abs(new Date() - date.toDate());
	let age = moment.duration(diff);
	if (age.asMonths() >= 20) {
		return `${age.asYears().toFixed()} Years`;
	}
	if (age.asMonths() >= 1) {
		return `${age.asMonths().toFixed()} Months`;
	}
	if (age.asWeeks() >= 1) {
		return `${age.asWeeks().toFixed()} Weeks`;
	}
	if (age.asDays() >= 1) {
		return `${age.asDays().toFixed()} Days`;
	}
	if (age.asHours() >= 1) {
		return `${age.asHours().toFixed()} Hours`;
	}
	if (age.asMinutes() >= 1) {
		return `${age.asMinutes().toFixed()} Minutes`;
	}
	if (age.asSeconds() >= 1) {
		return `${age.asSeconds().toFixed()} Seconds`;
	}
}
