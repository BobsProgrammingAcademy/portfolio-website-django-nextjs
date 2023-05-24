from django.test import TestCase
from .models import About


class AboutModelUnitTestCase(TestCase):
    def setUp(self):
        self.about = About.objects.create(
            title='Lorem ipsum dolor sit amet',
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quis odio id.',
            icon='settings'
        )

    def test_about_model(self):
        data = self.about
        self.assertIsInstance(data, About)
