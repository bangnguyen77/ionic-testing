describe('Chats Unit Test', function(){
    var Chats;
    beforeEach(module('starter.services'));

    beforeEach(inject(function (_Chats_) {
        Chats = _Chats_;
    }));

    it('can get an instance of my factory', inject(function(Chats) {
        expect(Chats).toBeDefined();
    }));

    it('has 5 chats', inject(function(Chats) {
        expect(Chats.all().length).toEqual(5);
    }));

    it('has Max as friend with id 1', inject(function(Chats) {
        var oneChat = {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        };

        expect(Chats.get(1).name).toEqual(oneChat.name);
    }));
});
