import Swal from "sweetalert2"

const Confirm18 = () => {

    return (
        <>
            {
                setTimeout(() => {


                    Swal.fire({
                        icon: "question",
                        iconColor: "#fffffc",
                        background: '#100007',
                        title: '¿Usted es mayor de 18 años?',
                        color: '#FFFFFc',
                        text: 'Prohibida la venda de alcohol a menores de 18 años',
                        confirmButtonText: 'Soy mayor de 18 años',
                        confirmButtonColor: '#68b684',
                        showCancelButton: true,
                        cancelButtonText: 'Soy menor de 18 años',
                        cancelButtonColor: '#5f1e3b'

                    })
                        .then((result) => {
                            if (!result.isConfirmed) {
                                Swal.fire({
                                    icon:'error',
                                    title: 'La venta de alcohol esta prohibida para menores de 18 años',
                                    timer: 3500,
                                    showConfirmButton: false,
                                    background: '#100007',
                                    color: '#FFFFFc',
                                    width: '500px'

                                })
                            }
                        })
                }, 1000)
            }
        </>
    )
}

export default Confirm18
