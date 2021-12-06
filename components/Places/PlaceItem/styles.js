import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
    padding: 15,
  },
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 18,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  delivery: {
    fontSize: 13,
    color: COLORS.TART_ORANGE,
  },
  rating: {
    backgroundColor: COLORS.ORANGE_YELLOW_CRAYOLA,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  ratingText: {
    fontWeight: '600',
    color: COLORS.SNOW,
  },
});

export default styles;
