import type { HttpContext } from '@adonisjs/core/http'

export default class BmisController {

    private BMI: Array<{ interval: Array<number>, fr: string, en: string, comment?: string }> = [
        { interval: [0, 16.5], fr: 'Dénutrition', en: 'Undernutrition', comment: 'Less than 16.5' },
        { interval: [16.5, 18.4], fr: 'Maigreur', en: 'Leanness', comment: '16.5 to 18.4' },
        { interval: [18.5, 24.9], fr: 'Corpulence normale', en: 'Normal weight', comment: '18.5 to 24.9' },
        { interval: [25, 29.9], fr: 'Surpoids', en: 'Overweight', comment: '25 to 29.9' },
        { interval: [30, 34.9], fr: 'Obésité modérée', en: 'Moderate obesity', comment: '30 to 34.9' },
        { interval: [35, 39.9], fr: 'Obésité sévère', en: 'Severe obesity', comment: '35 to 39.9' },
        { interval: [40, 9999], fr: 'Obésité massive', en: 'Massive obesity', comment: '40 and over' },
    ]

    private isBetween(x: number, interval: Array<number>): boolean {
        const [min, max] = interval;
        return x >= min && x <= max;
    }

    /**
     * @index
     * @operationId getBMI
     * @description Return bmi
     * @paramPath weight - Weight -  @type(number) @required
     * @paramPath height - Height -  @type(number) @required
     * @paramPath gender - Gender : 1 for male & 0 for female -  @enum(1, 0) @required
     * @responseBody 200 - Return HTML code of documentation page
     */
    async bmi({ params, response }: HttpContext) {
        const weight = params.weight // kg
        const height = params.height // m
        const gender = params.gender // 1 for male and 0 for female 

        console.log(weight, height, gender)

        if (weight && height && gender) {
            const bmi = weight / (height * height) // bmi
            const bmi_result: { interval: Array<number>, fr: string, en: string, comment?: string } | null | undefined = this.BMI.find((element) => this.isBetween(bmi, element.interval)) // bmi calcul
            let advice = 'Veuillez faire du sport'
            let image = 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg'

            const result = {
                weight,
                height,
                gender,
                bmi,
                bmi_result,
                advice,
                image
            }
            return response.status(200).send(result)
        }
        return response.status(503).send('weight, height and gender parameters are mandatory')
    }
}