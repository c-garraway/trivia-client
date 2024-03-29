import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import { theme } from "../../../../theme/theme";

export default function GlobalRankingTable({teamRanks}) {
    const insetColor = theme.palette.inset.main;
    

  return (
    <TableContainer component={Paper} sx={{backgroundColor: insetColor}}>
      <Table size='small' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">RANK</TableCell>
            <TableCell align="center">POINTS</TableCell>
            <TableCell align="center">TEAM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamRanks.map((team, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {team.teamRank}
              </TableCell>
              <TableCell align="center">{team.teamPointsTotal}</TableCell>
              <TableCell align="center">{team.teamName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

GlobalRankingTable.propTypes = {
    teamRank: PropTypes.number,
    teamPointsTotal: PropTypes.number, 
    teamName: PropTypes.string,
};

GlobalRankingTable.defaultProps = {
    teamRank: 0, 
    teamPointsTotal: 0,
    teamName: ''
};