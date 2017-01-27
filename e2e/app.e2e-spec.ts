import { RealTimeParkingBookingSystemPage } from './app.po';

describe('real-time-parking-booking-system App', function() {
  let page: RealTimeParkingBookingSystemPage;

  beforeEach(() => {
    page = new RealTimeParkingBookingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
