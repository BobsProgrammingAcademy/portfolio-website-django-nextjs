from django.test import TestCase
from .models import Contact


class ContactModelUnitTestCase(TestCase):
    def setUp(self):
        self.contact = Contact.objects.create(
            address='Dublin, Ireland',
            email='bob@test.com',
            phone='123456789'
        )

    def test_contact_model(self):
        data = self.contact
        self.assertIsInstance(data, Contact)
