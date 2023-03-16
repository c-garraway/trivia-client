import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formStyle } from "../../styles/styles";
import { validEmail } from "../../utilities/regex";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/userData/userDataSlice";
import { theme } from '../../theme/theme';
import { checkEmail, checkTeamName, addTeam, addPartner, getTeam } from "../../apis/team";
import { setTeamData } from "../../features/userData/teamDataSlice";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function Profile() {
    /* const df = new Intl.DateTimeFormat("en-us", {
        dateStyle: "full"
    });
    const memberStartDate = df.format(new Date())
    console.log(memberStartDate) */

    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

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

        if (!validEmail.test(teamLeaderEmailAddress)) {
            setFormMessage('Invalid email address!')
            setVisibility();
            setEmailErrorStatus(true)
            setSaveDisabled(true)
            return;
        }

        const ifExists = await checkEmail(teamLeaderEmailAddress)
        console.log(teamLeaderEmailAddress)
        console.log(ifExists)

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
            addTeam(currentUser.email, teamName)
        }

        if(teamLeaderEmailAddress) {
            addPartner(currentUser.email, teamLeaderEmailAddress)
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

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Box
                component="form"
                sx={formStyle}>
                <Typography sx={{ color: 'red', textAlign: 'center', visibility: { visibility } }}>{formMessage}</Typography>
                <div>
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
                        defaultValue={currentUser.createdAt}
                        sx={{marginBottom: 2}}
                    />
                    <ColoredLine color = {theme.palette.primary.main} />
                    <Typography sx={{textAlign: 'center', backgroundColor: 'lightyellow'}}>Complete only one of the fields below!</Typography>
                    <ColoredLine color= {theme.palette.primary.main} />
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
                    </Button> {/* TODO: Add close button */}
                </div>

            </Box>
        </Box>
    );
}

export default Profile;
