import prisma from "@/lib/prisma"

export const setTransactionId = async(orderId: string, transactionId: string) => {
    try {
        const order = await prisma.order.update({
            where: {id: orderId},
            data: {
                tramsactionId: transactionId
            }
        })

        if (!order) {
            return {
                ok: false,
                message: `No se encontro una orden con el id ${ orderId}`,
            }
        }

        return {ok: true }
    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'No se pudo actualizar el id de la transaccion'
        }
    }
}