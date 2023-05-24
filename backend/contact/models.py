from django.db import models


class Contact(models.Model):
  address = models.CharField(max_length=250)
  email = models.CharField(max_length=150)
  phone = models.CharField(max_length=20)

  class Meta:
    verbose_name = 'Contact'
    verbose_name_plural = 'Contact'

  def __str__(self):
    return self.email
