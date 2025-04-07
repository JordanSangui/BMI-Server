import type { HttpContext } from '@adonisjs/core/http'

export default class BmisController {

    private BMI: Array<{ interval: Array<number>, value_fr: string, value_en: string, comment?: string, img_men : string, img_woman : string, advice_fr: string, advice_en: string }> = [
        { interval: [0, 16.5], value_fr: 'Dénutrition', value_en: 'Undernutrition', comment: 'Less than 16.5', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : 'Augmentez vos apports en calories et en protéines avec des aliments riches et faciles à digérer. Consultez un professionnel de santé pour adapter votre alimentation.', advice_en : 'Increase your intake of calories and protein with rich and easy-to-digest foods. Consult a healthcare professional to adjust your diet.' },
        { interval: [16.5, 18.4], value_fr: 'Maigreur', value_en: 'Leanness', comment: '16.5 to 18.4', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : 'Adoptez une alimentation plus dense en énergie et pratiquez des exercices de renforcement musculaire pour prendre du poids sainement.', advice_en : '"Follow a more energy-dense diet and engage in strength exercises to gain weight in a healthy way.'  },
        { interval: [18.5, 24.9], value_fr: 'Corpulence normale', value_en: 'Normal weight', comment: '18.5 to 24.9', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : 'Continuez à manger équilibré et à pratiquer une activité physique régulière pour maintenir votre bonne santé.', advice_en : 'Keep eating a balanced diet and exercising regularly to maintain good health.'  },
        { interval: [25, 29.9], value_fr: 'Surpoids', value_en: 'Overweight', comment: '25 to 29.9', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : "Réduisez les aliments transformés, privilégiez les légumes et faites au moins 30 minutes d'activité physique par jour.", advice_en : 'Reduce processed foods, prioritize vegetables, and aim for at least 30 minutes of physical activity per day.'  },
        { interval: [30, 34.9], value_fr: 'Obésité modérée', value_en: 'Moderate obesity', comment: '30 to 34.9', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : "Demandez un suivi médical pour mettre en place un plan nutritionnel et d'activité physique adapté à votre profil.", advice_en : 'Seek medical support to establish a personalized nutrition and physical activity plan'  },
        { interval: [35, 39.9], value_fr: 'Obésité sévère', value_en: 'Severe obesity', comment: '35 to 39.9', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : 'Un accompagnement médical multidisciplinaire est nécessaire : diététique, activité physique adaptée, et soutien psychologique.', advice_en : 'A multidisciplinary medical approach is essential: dietary counseling, adapted physical activity, and psychological support.'  },
        { interval: [40, 9999], value_fr: 'Obésité massive', value_en: 'Massive obesity', comment: '40 and over', img_men : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', img_woman : 'https://media.ooreka.fr/public/image/obese-gros-morbide-1-main-10571460.jpg', advice_fr : 'Une intervention médicale ou chirurgicale peut être envisagée. Une prise en charge globale est indispensable.', advice_en : 'Medical or surgical intervention may be considered. A comprehensive treatment plan is essential.'  },
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
        // console.log(weight, height, gender)
        if (weight && height && gender) {
            const heightInMeter = height*0,01
            const bmi = weight / (heightInMeter * heightInMeter) // bmi
            const bmi_result: { interval: Array<number>, value_fr: string, value_en: string, comment?: string } | null | undefined = this.BMI.find((element) => this.isBetween(bmi, element.interval)) // bmi calcul
            const result = {
                weight,
                height,
                gender,
                bmi,
                bmi_result,
            }
            return response.status(200).send(result)
        }
        return response.status(503).send('weight, height and gender parameters are mandatory')
    }
}