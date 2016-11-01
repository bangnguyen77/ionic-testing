describe('Chats Unit Tests', function(){
    var Friends;
    beforeEach(module('starter.services'));

    beforeEach(inject(function (_Friends_) {
        Friends = _Friends_;
    }));

    it('can get an instance of my factory', inject(function(Chats) {
        expect(Chats).toBeDefined();
    }));

    it('has 5 chats', inject(function(Chats) {
        expect(Chats.all().length).toEqual(5);
    }));

    it('has Max as friend with id 1', inject(function(Chats) {
        var oneFriend = {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/adam.jpg'
        };

        expect(Chats.get(1).name).toEqual(oneFriend.name);
    }));
});
