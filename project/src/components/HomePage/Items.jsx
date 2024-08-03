import { Paper, Button } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes

function Items({ item }) {
    console.log(item); // Debug: Check if item is being passed correctly
    return (
        <Paper
            sx={{
                position: 'relative',
                height: '400px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${item.imageLink})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay effect
                backgroundBlendMode: 'overlay'
            }}
        >
            <img
                src={item.imageLink}
                alt={item.title}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                }}
            />
            <h2 style={{
                position: 'absolute',
                bottom: '10px',
                width: '100%',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                margin: 0,
                padding: '10px 0'
            }}>{item.title}</h2>
        </Paper>
    );
}


// Add PropTypes validation
Items.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageLink: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        // description: PropTypes.string, // Uncomment if using description
    }).isRequired,
};



export default Items;
