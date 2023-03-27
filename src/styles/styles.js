import { theme } from '../theme/theme'

export const formStyle = {
    position: 'absolute',
    /*   top: {xs: "25%", sm: "30%", md: "35%"},
      left: '50%',
      transform: 'translate(-50%, -40%)', */
    width: { xs: "70%", sm: "40%", md: "25%" },
    /*   maxHeight: '80%', */
    bgcolor: 'background.paper',
    border: '1px solid #000',
    /*   boxShadow: 10, */
    p: 4,
    borderRadius: '5px',
    /*   opacity: '95%', */
    '& .MuiTextField-root': { mt: 2, width: '100%' },
};

export const loginFormStyle = {
    /* position: 'absolute', */
    /*   top: {xs: "25%", sm: "30%", md: "35%"},
      left: '50%',
      transform: 'translate(-50%, -40%)', */
    /* width: {xs: "70%", sm: "70%", md: "75%"}, */
    /*   maxHeight: '80%', */
    backgroundColor: theme.palette.shell.main,
    border: '1px solid #000',
    /*   boxShadow: 10, */
    p: 4,
    borderRadius: '5px',
    /*   opacity: '95%', */
    '& .MuiTextField-root': { mt: 2, width: '100%' },
};

export const answerBoxStyle = {
    display: 'flex',
    border: '1px solid black',
    padding: 10,
    width: '100%',
    minHeight: 50,
    borderRadius: 5,
    alignItems: 'center',
    cursor: 'pointer',
    justifyContent: 'center',
}

export const questionBoxStyle = {
    height: '4em',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    /* textAlign: 'center' */
}

export const answerButtonStyle = {
    width: '100%',
    height: '4em',
    textTransform: 'none',
    marginBottom: 10,
    lineHeight: '95%',
    fontWeight: 'normal',


}

export const nextButtonStyle = {
    opacity: .6,
    cursor: 'not-allowed',
    width: '100%',
    height: '4em',
    textTransform: 'none',
    marginTop: 10,
    backgroundColor: theme.palette.secondary.main,
}