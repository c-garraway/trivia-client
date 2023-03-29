import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { formStyle } from "../../styles/styles.js";
import { validEmail } from "../../utilities/regex";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/userData/userDataSlice";
//import { theme } from '../../theme/theme';
import { checkEmail, checkTeamName, addTeam, addPartner, getTeam } from "../../apis/team";
import { selectTeamData, setTeamData } from "../../features/userData/teamDataSlice";
import { Stack } from "@mui/system";

/* const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
); */

const formStyle = {
    position: 'absolute',
    width: { xs: "70%", sm: "40%", md: "60%" },
    bgcolor: 'background.paper',
    border: '1px solid #000',
    pl: 2,
    pr: 2,
    pt: 1,
    pb: 2,
    borderRadius: '5px',
    '& .MuiTextField-root': { mt: 2, width: '100%' },
};

function Profile() {

    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    const teamData = useSelector(selectTeamData);
    const dispatch = useDispatch();
    const cleanDate = currentUser.createdAt?.slice(0, 10);
    const existingTeamName = teamData.name ? teamData.name : 'Not Yet Registered'
    const existingTeamRole = currentUser.userType ? currentUser.userType : 'Not Yet Registered'
    const capExistingTeamRole = existingTeamRole.charAt(0).toUpperCase() + existingTeamRole.slice(1)
    let existingTeammate;

    if(existingTeamRole === 'lead') {
        existingTeammate = teamData?.members?.partner === '' ? 'Not Yet Registered' : teamData?.members?.partner
    } else {
        existingTeammate = teamData?.members?.lead
    }

    const [formMessage, setFormMessage] = useState('none');
    const [visibility, setVisibility] = useState('hidden');
    const [emailErrorStatus, setEmailErrorStatus] = useState(false);
    const [teamNameErrorStatus, setTeamNameErrorStatus] = useState(false);
    const [saveDisabled, setSaveDisabled] = useState(true);
    const [teamName, setTeamName] = useState('');
    const [teamNameDisabled, setTeamNameDisabled] = useState(false);
    const [teamLeaderEmailAddress, setTeamLeaderEmailAddress] = useState('');
    const [teamLeaderEmailAddressDisabled, setTeamLeaderEmailAddressDisabled] = useState(false);

    async function handleTeamNameValidate() {

        if (teamName === '') {
            setSaveDisabled(true)
            return;
        }

        setTeamLeaderEmailAddressDisabled(true)

        if (existingTeamName) {
            setFormMessage('You already belong to a team!')
            setVisibility();
            setTeamNameErrorStatus(true)
            setSaveDisabled(true)
            return;
        }

        if (teamName.length < 4) {
            setFormMessage('Team name less than 4 characters!')
            setVisibility();
            setTeamNameErrorStatus(true)
            setSaveDisabled(true)
            return;
        }

        const ifExists = await checkTeamName(teamName)

        if(ifExists) {
            setFormMessage(`${teamName} already exists`)
            setVisibility();
            setTeamNameErrorStatus(true)
            setSaveDisabled(true)
            return;
        }

        setSaveDisabled(false)
    }

    async function handleEmailValidate() {

        if (teamLeaderEmailAddress === '') {
            setSaveDisabled(true)
            return;
        }

        setTeamNameDisabled(true)

        if (existingTeamName) {
            setFormMessage('You already belong to a team!')
            setVisibility();
            setEmailErrorStatus(true)
            setSaveDisabled(true)
            return;
        }

        if (!validEmail.test(teamLeaderEmailAddress)) {
            setFormMessage('Invalid email address!')
            setVisibility();
            setEmailErrorStatus(true)
            setSaveDisabled(true)
            return;
        }


        const ifExists = await checkEmail(teamLeaderEmailAddress)
        //console.log(teamLeaderEmailAddress)
        //console.log(ifExists)

        if(ifExists === false) {
            setFormMessage('Partner email address not found')
            setVisibility();
            setEmailErrorStatus(true)
            setSaveDisabled(true)
            return;
        }

        setSaveDisabled(false)
    }

    async function handleSave() {

        if(teamName.length > 4) {
            await addTeam(teamName)
        }

        if(teamLeaderEmailAddress) {
            await addPartner(teamLeaderEmailAddress)
        }

        const team = await getTeam()
        new Promise(resolve => {
            dispatch(setTeamData(team));
            resolve();
        })
        .then(() => {
            navigate('/game');
        });
    }

    function handleClose() {
        navigate('/game');
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Box
                component="form"
                sx={formStyle}>
                <Typography sx={{ color: 'red', textAlign: 'center', visibility: { visibility } }}>{formMessage}</Typography>
                <Stack
                    direction={{ xs: "column", md: "row"  }}
                    spacing={.1}
                    paddingTop={1}
                    justifyContent="space-around"
                    paddingRight={{xs: 4, md: 0}}
                    >
                    <Box sx={{padding: 2, width: {xs: '100%', md:'45%'}}}>
                        <TextField
                            disabled
                            variant="outlined"
                            id="outlined-required"
                            label="Nick Name"
                            type='text'
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={currentUser.name}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            id="outlined-required"
                            label="Email"
                            type='email'
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={currentUser.email}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            id="outlined-required"
                            label="Member Since"
                            type='text'
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={cleanDate}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            id="outlined-required"
                            label="Existing Team Name"
                            type='text'
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={existingTeamName}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            id="outlined-required"
                            label="Existing Team Role"
                            type='text'
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={capExistingTeamRole}
                        />
                        <TextField
                            disabled
                            variant="outlined"
                            id="outlined-required"
                            label="Existing Teammate"
                            type='text'
                            size="small"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            defaultValue={existingTeammate}
                        />
                        <Button
                                variant="contained"
                                onClick={handleClose}
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                                >Close
                            </Button>
                    </Box>
                    { existingTeamName ? '' :
                        <Box sx={{border: '1px solid black', borderRadius: '5px', padding: 2, width: {xs: '100%', md:'45%'}}}>
                            <Typography sx={{textAlign: 'center', fontWeight: 'bold'}}>Create or Join an Existing Team below!</Typography>
                            <Typography sx={{textAlign: 'center', textDecoration: 'underline'}}>This choice cannot be updated!</Typography>
                            <TextField
                                error={teamNameErrorStatus}
                                disabled={teamNameDisabled}
                                variant="outlined"
                                id="outlined-team-input"
                                label="Create New Team (Name)"
                                type="text"
                                size="small"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => {
                                    setTeamName(e.currentTarget.value)
                                    setTeamNameErrorStatus(false)
                                    setTeamLeaderEmailAddressDisabled(false)
                                    setFormMessage('none')
                                    setVisibility('hidden')
                                    setSaveDisabled(false)
                                }}
                                onBlur={handleTeamNameValidate}
                                helperText="To create a new team, enter team name above. Min 4 characters."
                            />
                            <Typography sx={{textAlign: 'center', fontWeight: 'bold'}}>-- OR --</Typography>

                            <TextField
                                error={emailErrorStatus}
                                disabled={teamLeaderEmailAddressDisabled}
                                variant="outlined"
                                id="outlined-email-input"
                                label="Join Existing Team (Leaders Email Address)"
                                type="email"
                                size="small"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => {
                                    setTeamLeaderEmailAddress(e.currentTarget.value)
                                    setEmailErrorStatus(false)
                                    setTeamNameDisabled(false)
                                    setFormMessage('none')
                                    setVisibility('hidden')
                                    setSaveDisabled(false)                            
                                }}
                                onBlur={handleEmailValidate}
                                helperText="To team up with an existing team leader, enter their email address above."
                            />
                            <Button
                                disabled={saveDisabled}
                                variant="contained"
                                onClick={handleSave}
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                                >Save
                            </Button>
                        </Box>
                    }
                </Stack>
            </Box>
        </Box>
    );
}

export default Profile;
