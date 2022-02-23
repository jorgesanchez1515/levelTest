import { Component, OnInit } from '@angular/core';
import * as Qs from 'qs'
import { ToastService, AngularToastifyModule } from 'angular-toastify'

@Component({
	selector: 'app-level-test',
	templateUrl: './level-test.component.html',
	styleUrls: ['./level-test.component.scss']
})

export class LevelTestComponent implements OnInit {

	public formData: Object
	public onChange: Function
	public onSubmit: Function

	constructor() {
		this.formData = {}

		this.onChange = (e: any) => {
			this.formData = {
				...this.formData,
				[e.target.name]: e.target.value
			}
		}

		this.onSubmit = (e: any): void => {
			e.preventDefault()

			const str = Qs.stringify(this.formData)

			fetch('https://docs.google.com/forms/d/e/1FAIpQLSd_tOaYY-pNMKdwpFfRq-LEm6jhRTp_T8NMc2BY1Xb1-G-K-g/formResponse', {
				method: 'post',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				mode: 'no-cors',
				body: str,
				redirect: 'follow'
			})
			.then(() => {
				console.log("Done")
				const toast = new ToastService()
				toast.info("Hola")
			})
			.catch((err) => {
				console.log("error")
			})
		}
	}

	ngOnInit(): void {
	}
}
