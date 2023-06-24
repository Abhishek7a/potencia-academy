import { toast } from 'react-toastify';
const statusHandler = (...props) => {
    if (props[0] == 201) {
        toast.success(props[1], {
          
        });
        return true;
    }

    if (props[0] == 406) {
        toast.error(props[1], {
         
        });
        return false;
    }

    if (props[0] == 422) {
        toast.info(props[1], {
           
        });
        return false;
    }

    if (props[0] == 409) {
        toast.warn(props[1], {
          
        });
        return false;
    }
    if (props[0] == 500) {
        toast.warn(props[1], {
          
        });
        return false;
    }
}
export default statusHandler;
