import Afip from '@afipsdk/afip.js';

const VALID_CODES = ['681010', '681098', '681099', '682091', '682099', '701090'];

const afip = new Afip({
    CUIT: process.env.AFIP_SERVICE_CUIT,
    res_folder: 'src/services/afip/resources',
});

interface IServiceResponse {
    details?: {
        estadoClave: string;
        actividad: {
            idActividad: string;
            descripcionActividad: string;
        }[];
    }
    isValid: boolean;
}

export default class AfipService {
    checkContributor = async (cuit: number): Promise<IServiceResponse> => {
        try {
            const taxpayerDetails = await afip.RegisterScopeFour.getTaxpayerDetails(cuit);

            if (!taxpayerDetails || !taxpayerDetails.actividad) {
                return { isValid: false };
            }

            const exists = taxpayerDetails.actividad
                .find((act) => VALID_CODES.includes(act.idActividad));

            return {
                details: { ...taxpayerDetails },
                isValid: !!exists && taxpayerDetails.estadoClave === 'ACTIVO',
            };
        } catch (e) {
            console.warn(`Error providing details for cuit: ${cuit}`);
            return {
                isValid: false,
            };
        }
    }
}
