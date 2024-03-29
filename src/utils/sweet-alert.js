import Swal from 'sweetalert2';


export async function toast(type, msg) {
    Swal.fire({
        position: "top-end",
        icon: type,
        showConfirmButton: false,
        timer: 2700,
        toast: true,
        title: msg
    })
} 